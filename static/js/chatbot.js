(async function () {
  let glossaryData = [];

  const STOP_WORDS = new Set([
    "what", "is", "are", "tell", "me", "about", "can", "you", "please",
    "explain", "define", "meaning", "does", "do", "how", "why", "when",
    "where", "give", "show", "i", "want", "to", "know", "the", "a", "an",
    "of", "for", "in", "on", "at", "its", "it", "this", "that", "these",
    "those", "with", "by", "from", "as", "was", "were", "be", "been",
    "being", "have", "has", "had", "will", "would", "could", "should",
    "work", "works", "working", "use", "uses", "using", "get", "gets",
    "like", "mean", "means", "difference", "between", "vs", "and", "or",
    "not", "used", "called", "referred", "term", "concept"
  ]);

  // Strips spaces/hyphens so "autoscaling" matches "Auto Scaling"
  function compact(text) {
    return (text || "").toLowerCase().replace(/[\s\-_]+/g, "");
  }

  // Expands common acronyms so "VM" → "virtual machine", "k8s" → "kubernetes"
  const ACRONYM_MAP = {
    // Virtual & Physical Infrastructure
    "vm":           "virtual machine",
    "vms":          "virtual machine",
    "dc":           "data center",
    "lb":           "load balancer",
    "lbs":          "load balancer",
    // Kubernetes & Scaling
    "k8s":          "kubernetes",
    "hpa":          "horizontal scaling",
    "vpa":          "vertical scaling",
    // CI/CD
    "ci":           "continuous integration",
    "cd":           "continuous delivery",
    "cicd":         "continuous integration continuous delivery",
    // APIs & Interfaces
    "api":          "application programming interface",
    // Operating Systems
    "os":           "operating system",
    // *-as-a-Service
    "saas":         "software service",
    "paas":         "platform service",
    "iaas":         "infrastructure service",
    "faas":         "function service",
    "daas":         "database service",
    "caas":         "containers service",
    // Engineering practices
    "sre":          "site reliability engineering",
    "iac":          "infrastructure code",
    "eda":          "event driven architecture",
    // Security
    "ce":           "chaos engineering",
    "sce":          "security chaos engineering",
    "rbac":         "role based access control",
    "tls":          "transport layer security",
    "mtls":         "mutual transport layer security",
    "zta":          "zero trust architecture",
    "ztna":         "zero trust architecture",
    // Policy
    "opa":          "policy code",
    "pac":          "policy code",
    // WebAssembly & eBPF
    "wasm":         "webassembly",
    "ebpf":         "ebpf",
    // App architecture
    "monolith":     "monolithic apps",
    "microservice": "microservices architecture",
  };

  function expandAcronyms(text) {
    return (text || "")
      .replace(/[^\w\s]/g, " ")
      .replace(/\b(\w{1,15})\b/gi, match => ACRONYM_MAP[match.toLowerCase()] || match)
      .trim();
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(word => word && !STOP_WORDS.has(word))
      .join(" ")
      .trim();
  }

  function escapeHtml(text) {
    return (text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function loadGlossary() {
    const response = await fetch("/data/glossary.json");
    if (!response.ok) {
      throw new Error(`Unable to load glossary data: ${response.status}`);
    }
    glossaryData = await response.json();
  }

  function scoreMatch(query, item) {
    const rawQuery = (query || "").toLowerCase().trim();
    const q        = normalize(query);
    if (!rawQuery || !q) return 0;

    const rawTitle     = (item.title || "").toLowerCase().trim();
    const title        = normalize(item.title);
    const compactTitle = compact(item.title);
    const content      = normalize(item.content);
    const fullContent  = normalize(item.fullContent);

    let titleScore   = 0;
    let contentScore = 0;

    if (rawTitle === rawQuery)             titleScore += 300;
    if (title    === q)                    titleScore += 250;
    if (rawTitle.startsWith(rawQuery))     titleScore += 180;
    if (title.startsWith(q))              titleScore += 150;
    if (rawTitle.includes(rawQuery))       titleScore += 120;
    if (title.includes(q))                titleScore += 100;

    const cq = compact(rawQuery);
    if (compactTitle === cq)              titleScore += 240;
    else if (compactTitle.startsWith(cq)) titleScore += 160;
    else if (compactTitle.includes(cq))   titleScore += 90;

    const words = q.split(/\s+/).filter(Boolean);
    let matchedTitleWords = 0;

    for (const word of words) {
      const cWord = compact(word);
      if (rawTitle === word || title === word || compactTitle === cWord) {
        titleScore += 90;
        matchedTitleWords++;
      } else if (
        rawTitle.includes(word) || title.includes(word) ||
        compactTitle.includes(cWord) || cWord.includes(compactTitle)
      ) {
        titleScore += 30;
        matchedTitleWords++;
      }

      if (content.includes(word))     contentScore += 5;
      if (fullContent.includes(word)) contentScore += 2;
    }

    if (words.length > 0 && matchedTitleWords === words.length) {
      titleScore += 80;
    } else if (words.length > 1 && matchedTitleWords >= Math.ceil(words.length / 2)) {
      titleScore += 30;
    }

    if (content.includes(q))     contentScore += 15;
    if (fullContent.includes(q)) contentScore += 8;

    // Content-only matches are rejected — must have title relevance
    if (titleScore === 0) return 0;

    return titleScore + contentScore;
  }

  function searchGlossary(query) {
    const expandedQuery   = expandAcronyms(query);
    const rawQuery        = (expandedQuery || "").toLowerCase().trim();
    const normalizedQuery = normalize(expandedQuery);

    if (!rawQuery || !normalizedQuery) return [];

    const exactMatch = glossaryData.find(item => {
      const rawTitle        = (item.title || "").toLowerCase().trim();
      const normalizedTitle = normalize(item.title);
      return rawTitle === rawQuery || normalizedTitle === normalizedQuery;
    });

    if (exactMatch) {
      const remaining = glossaryData
        .filter(item => item.title !== exactMatch.title)
        .map(item => ({ ...item, score: scoreMatch(expandedQuery, item) }))
        .filter(item => item.score >= 30)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

      return [{ ...exactMatch, score: 999 }, ...remaining];
    }

    return glossaryData
      .map(item => ({ ...item, score: scoreMatch(expandedQuery, item) }))
      .filter(item => item.score >= 30)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  function renderResults(results, query) {
    const output = document.getElementById("glossary-chatbot-output");

    if (!results.length) {
      output.innerHTML = `
        <div class="glossary-chatbot-empty">
          <strong>No glossary match found for "${escapeHtml(query)}".</strong>
          <p>
            This assistant covers cloud native technical terms defined in the
            CNCF Glossary (e.g. Kubernetes, Service Mesh, GitOps).
          </p>
          <p>Try a specific term or <a href="/">browse the full glossary</a>.</p>
        </div>
      `;
      return;
    }

    const fullText  = results[0]?.content || "";
    const maxLength = 150;
    const cutIndex  = fullText.lastIndexOf(" ", maxLength);
    const overview  =
      fullText.length > maxLength
        ? `${fullText.slice(0, cutIndex > 0 ? cutIndex : maxLength)}...`
        : fullText;

    const topTitle = results[0]?.title || "";

    const remainingResults = results
      .slice(1)
      .filter(item => item.title !== topTitle)
      .filter((item, idx, self) =>
        idx === self.findIndex(r => r.title === item.title)
      );

    output.innerHTML = `
      <div class="glossary-chatbot-overview">
        <strong>Overview</strong>
        <div>${escapeHtml(overview)}</div>
      </div>

      <div class="glossary-chatbot-result">
        <div class="glossary-chatbot-result-title">
          <a href="${escapeHtml(results[0].url)}">${escapeHtml(results[0].title)}</a>
        </div>
        <div class="glossary-chatbot-result-body">
          ${escapeHtml(results[0].content)}
        </div>
      </div>

      ${remainingResults.length ? `
        <div class="glossary-chatbot-summary">Matching Results</div>
        ${remainingResults.map(result => `
          <div class="glossary-chatbot-result">
            <div class="glossary-chatbot-result-title">
              <a href="${escapeHtml(result.url)}">${escapeHtml(result.title)}</a>
            </div>
            <div class="glossary-chatbot-result-body">
              ${escapeHtml(result.content)}
            </div>
          </div>
        `).join("")}
      ` : ""}
    `;
  }

  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      #glossary-chatbot {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 10000;
        font-family: Arial, sans-serif;
      }

      #glossary-chatbot-toggle {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: none;
        border-radius: 999px;
        padding: 12px 18px;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        color: #fff;
        background: #326ce5;
        box-shadow: 0 4px 14px rgba(0,0,0,0.25);
        transition: background 0.2s;
      }

      #glossary-chatbot-toggle:hover {
        background: #1f52c4;
      }

      #glossary-chatbot-panel {
        width: 380px;
        max-width: calc(100vw - 30px);
        background: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        overflow: hidden;
        max-height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
      }

      #glossary-chatbot-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 14px;
        border-bottom: 1px solid #eee;
        flex-shrink: 0;
      }

      #glossary-chatbot-title {
        font-size: 16px;
        font-weight: 700;
      }

      #glossary-chatbot-close {
        border: none;
        background: transparent;
        font-size: 22px;
        cursor: pointer;
        line-height: 1;
        padding: 0 4px;
        color: #555;
      }

      #glossary-chatbot-close:hover {
        color: #000;
      }

      #glossary-chatbot-body {
        padding: 14px;
        overflow-y: auto;
        flex: 1;
      }

      .glossary-chatbot-help {
        margin: 0 0 10px 0;
        font-size: 14px;
        line-height: 1.45;
        color: #444;
      }

      #glossary-chatbot-input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
      }

      #glossary-chatbot-input:focus {
        border-color: #326ce5;
      }

      #glossary-chatbot-search {
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding: 10px 12px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
        background: #326ce5;
        color: #fff;
        margin-bottom: 12px;
        transition: background 0.2s;
      }

      #glossary-chatbot-search:hover {
        background: #1f52c4;
      }

      #glossary-chatbot-output {
        max-height: 320px;
        overflow-y: auto;
      }

      .glossary-chatbot-summary {
        font-size: 13px;
        font-weight: 600;
        color: #555;
        margin-bottom: 10px;
        padding-top: 10px;
        border-top: 1px solid #eee;
      }

      .glossary-chatbot-result {
        border-top: 1px solid #eee;
        padding: 10px 0;
      }

      .glossary-chatbot-result:first-of-type {
        border-top: none;
      }

      .glossary-chatbot-result-title {
        font-weight: 700;
        margin-bottom: 6px;
      }

      .glossary-chatbot-result-title a {
        text-decoration: none;
        color: #326ce5;
      }

      .glossary-chatbot-result-title a:hover {
        text-decoration: underline;
      }

      .glossary-chatbot-result-body {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }

      .glossary-chatbot-overview {
        margin-bottom: 12px;
        font-size: 14px;
        line-height: 1.5;
        background: #f5f8ff;
        border-left: 3px solid #326ce5;
        padding: 8px 10px;
        border-radius: 0 6px 6px 0;
      }

      .glossary-chatbot-overview strong {
        display: block;
        margin-bottom: 4px;
        color: #326ce5;
      }

      .glossary-chatbot-empty {
        font-size: 14px;
        line-height: 1.6;
        color: #444;
      }

      .glossary-chatbot-empty strong {
        display: block;
        margin-bottom: 6px;
        color: #333;
      }

      .glossary-chatbot-empty p {
        margin: 0 0 8px 0;
      }

      .glossary-chatbot-empty a {
        color: #326ce5;
      }

      @media (max-width: 640px) {
        #glossary-chatbot {
          right: 12px;
          bottom: 96px;
          z-index: 10001;
        }

        #glossary-chatbot-panel {
          width: calc(100vw - 24px);
          max-width: 100%;
          max-height: calc(100vh - 140px);
        }

        #glossary-chatbot-output {
          max-height: 220px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Detects the cookie consent banner height at runtime and
  // repositions the widget above it. Re-runs when banner is dismissed.
  function adjustForCookieBanner() {
    const chatbot = document.getElementById("glossary-chatbot");
    if (!chatbot) return;

    const COOKIE_SELECTORS = [
      "#cookie-consent",
      "#cookie-banner",
      ".cookie-banner",
      ".cookie-consent",
      ".cc-window",
      "#onetrust-banner-sdk",
      "[id*='cookie'][class*='banner']",
      "[class*='cookie-bar']",
      "[class*='cookieConsent']",
    ];

    let bannerHeight = 0;
    for (const sel of COOKIE_SELECTORS) {
      try {
        const el = document.querySelector(sel);
        if (el && el.offsetParent !== null && el.offsetHeight > 0) {
          bannerHeight = Math.max(bannerHeight, el.offsetHeight);
        }
      } catch (_) {}
    }

    const isMobile  = window.innerWidth <= 640;
    const baseBottom = isMobile ? 96 : 20;

    chatbot.style.bottom =
      bannerHeight > 0 ? `${bannerHeight + 8}px` : `${baseBottom}px`;
  }

  function createChatbot() {
    const wrapper = document.createElement("div");
    wrapper.id = "glossary-chatbot";

    wrapper.innerHTML = `
      <button id="glossary-chatbot-toggle" aria-label="Open glossary assistant">
        Glossary Assistant
      </button>

      <div id="glossary-chatbot-panel" hidden>
        <div id="glossary-chatbot-header">
          <div id="glossary-chatbot-title">Glossary Assistant</div>
          <button id="glossary-chatbot-close" aria-label="Close glossary assistant">×</button>
        </div>

        <div id="glossary-chatbot-body">
          <p class="glossary-chatbot-help">
            Ask about a cloud native term. Results are sourced from the CNCF Glossary.
          </p>

          <input
            id="glossary-chatbot-input"
            type="text"
            placeholder="Kubernetes, GitOps, service mesh…"
            autocomplete="off"
          />

          <button id="glossary-chatbot-search">Search</button>

          <div id="glossary-chatbot-output" aria-live="polite"></div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    const toggle    = document.getElementById("glossary-chatbot-toggle");
    const panel     = document.getElementById("glossary-chatbot-panel");
    const closeBtn  = document.getElementById("glossary-chatbot-close");
    const input     = document.getElementById("glossary-chatbot-input");
    const searchBtn = document.getElementById("glossary-chatbot-search");

    function openPanel() {
      panel.hidden = false;
      toggle.style.display = "none";
      input.focus();
    }

    function closePanel() {
      panel.hidden = true;
      toggle.style.display = "inline-flex";
    }

    function runSearch() {
      const query  = input.value.trim();
      const output = document.getElementById("glossary-chatbot-output");

      if (!query) {
        output.innerHTML = "";
        return;
      }

      const results = searchGlossary(query);
      renderResults(results, query);
    }

    toggle.addEventListener("click", openPanel);
    closeBtn.addEventListener("click", closePanel);
    searchBtn.addEventListener("click", runSearch);

    input.addEventListener("keydown", event => {
      if (event.key === "Enter")  runSearch();
      if (event.key === "Escape") closePanel();
    });

    adjustForCookieBanner();

    const observer = new MutationObserver(adjustForCookieBanner);
    observer.observe(document.body, {
      childList: true,
      subtree: false,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    window.addEventListener("resize", adjustForCookieBanner, { passive: true });
  }

  try {
    await loadGlossary();
    injectStyles();
    createChatbot();
  } catch (error) {
    console.error("Glossary chatbot failed to initialize:", error);
  }
})();
