(async function () {
  let glossaryData = [];

  function normalize(text) {
    return (text || '').toLowerCase().trim();
  }

  function escapeHtml(text) {
    return (text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async function loadGlossary() {
    const response = await fetch('/data/glossary.json');
    if (!response.ok) {
      throw new Error(`Unable to load glossary data: ${response.status}`);
    }
    glossaryData = await response.json();
  }

  function scoreMatch(query, item) {
    const q = normalize(query);
    if (!q) return 0;

    const title = normalize(item.title);
    const content = normalize(item.content);
    const fullContent = normalize(item.fullContent);

    let score = 0;

    if (title === q) score += 100;
    if (title.includes(q)) score += 40;
    if (content.includes(q)) score += 20;
    if (fullContent.includes(q)) score += 10;

    const words = q.split(/\s+/).filter(Boolean);
    for (const word of words) {
      if (title.includes(word)) score += 8;
      if (content.includes(word)) score += 4;
      if (fullContent.includes(word)) score += 2;
    }

    return score;
  }

  function searchGlossary(query) {
    return glossaryData
      .map(item => ({ ...item, score: scoreMatch(query, item) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }
  function renderResults(results, query) {
  const output = document.getElementById('glossary-chatbot-output');

  if (!results.length) {
    output.innerHTML = `
      <div class="glossary-chatbot-empty">
        I couldn’t find a glossary match for
        "<strong>${escapeHtml(query)}</strong>".
        Try another cloud native term or
        <a href="/">browse the glossary</a>.
      </div>
    `;
    return;
  }

  const fullText = results[0]?.content || "";
  const maxLength = 150;
  const cutIndex = fullText.lastIndexOf(' ', maxLength);

  const overview =
    fullText.length > maxLength
      ? `${fullText.slice(0, cutIndex > 0 ? cutIndex : maxLength)}...`
      : fullText;

  const topTitle = results[0]?.title || "";

  const remainingResults = results
  .slice(1)
  .filter(item => item.title !== topTitle) 
  .filter((item, index, self) =>
    index === self.findIndex(r => r.title === item.title)
  );

  output.innerHTML = `
    <div class="glossary-chatbot-overview">
      <strong>Overview</strong>
      <div>${escapeHtml(overview)}</div>
    </div>

    <div class="glossary-chatbot-result">
      <div class="glossary-chatbot-result-title">
        <a href="${results[0].url}">${escapeHtml(results[0].title)}</a>
      </div>
      <div class="glossary-chatbot-result-body">
        ${escapeHtml(results[0].content)}
      </div>
    </div>

    ${remainingResults.length ? `
      <div class="glossary-chatbot-summary">
        Matching Results
      </div>

      ${remainingResults.map(result => `
        <div class="glossary-chatbot-result">
          <div class="glossary-chatbot-result-title">
            <a href="${result.url}">${escapeHtml(result.title)}</a>
          </div>
          <div class="glossary-chatbot-result-body">
            ${escapeHtml(result.content)}
          </div>
        </div>
      `).join('')}
    ` : ""}
  `;
}
    function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #glossary-chatbot {
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 9999;
        font-family: Arial, sans-serif;
      }

      #glossary-chatbot-toggle {
        border: none;
        border-radius: 999px;
        padding: 12px 18px;
        cursor: pointer;
        font-weight: 700;
        color: #fff;
        background: #326ce5;
        box-shadow: 0 4px 14px rgba(0,0,0,0.18);
      }

      #glossary-chatbot-panel {
        width: 380px;
        max-width: calc(100vw - 30px);
        background: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        overflow: hidden;
      }

      #glossary-chatbot-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 14px;
        border-bottom: 1px solid #eee;
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
      }

      #glossary-chatbot-body {
        padding: 14px;
      }

      .glossary-chatbot-help {
        margin: 0 0 10px 0;
        font-size: 14px;
        line-height: 1.45;
      }

      #glossary-chatbot-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
      }

      #glossary-chatbot-search {
        width: 100%;
        border: none;
        padding: 10px 12px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        background: #326ce5;
        color: #fff;
        margin-bottom: 12px;
      }

      #glossary-chatbot-output {
        max-height: 320px;
        overflow-y: auto;
      }

      .glossary-chatbot-summary {
        font-size: 13px;
        color: #555;
        margin-bottom: 10px;
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
      }

      .glossary-chatbot-result-body,
      .glossary-chatbot-empty {
        font-size: 14px;
        line-height: 1.5;
      }
     .glossary-chatbot-overview {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 1.5;
     }
      @media (max-width: 640px) {
        #glossary-chatbot {
          right: 12px;
          left: 12px;
          bottom: 12px;
        }

        #glossary-chatbot-panel {
          width: 100%;
          max-width: 100%;
        }
        }
    `;
    document.head.appendChild(style);
  }

  function createChatbot() {
    const wrapper = document.createElement('div');
    wrapper.id = 'glossary-chatbot';

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
            placeholder="Ask about Kubernetes, GitOps, observability..."
          />

          <button id="glossary-chatbot-search">Search</button>

          <div id="glossary-chatbot-output"></div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    const toggle = document.getElementById('glossary-chatbot-toggle');
    const panel = document.getElementById('glossary-chatbot-panel');
    const closeBtn = document.getElementById('glossary-chatbot-close');
    const input = document.getElementById('glossary-chatbot-input');
    const searchBtn = document.getElementById('glossary-chatbot-search');

    function openPanel() {
      panel.hidden = false;
      toggle.style.display = 'none';
      input.focus();
    }

    function closePanel() {
      panel.hidden = true;
      toggle.style.display = 'inline-flex';
    }

   function runSearch() {
  const query = input.value.trim();
  const output = document.getElementById('glossary-chatbot-output');

  if (!query) {
    output.innerHTML = '';
    return;
  }

  const results = searchGlossary(query);
  renderResults(results, query);
}

    toggle.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    searchBtn.addEventListener('click', runSearch);

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        runSearch();
      }
      if (event.key === 'Escape') {
        closePanel();
      }
    });
  }

  try {
    await loadGlossary();
    injectStyles();
    createChatbot();
  } catch (error) {
    console.error('Glossary chatbot failed to initialize:', error);
  }
})();