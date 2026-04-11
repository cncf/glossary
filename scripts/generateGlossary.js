const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'en');
const OUTPUT_DIR = path.join(__dirname, '..', 'static', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'glossary.json');

const SKIP_FILES = new Set([
  '_index.md',
  '_TEMPLATE.md',
  'search.md',   // Hugo UI page, not a glossary term — has no content body
]);

const SKIP_DIRS = new Set([
  'contribute',
  'contributor-ladder',
  'style-guide',
]);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function stripFrontMatter(raw) {
  if (!raw.startsWith('---')) return raw;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return raw;
  return raw.slice(end + 4).trim();
}

function parseFrontMatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};

  const block = raw.slice(3, end).trim();
  const result = {};

  for (const line of block.split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;

    const key = match[1].trim();
    let value = match[2].trim();

    value = value.replace(/^['"]|['"]$/g, '');
    result[key] = value;
  }

  return result;
}

function cleanMarkdown(markdown) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[.*?\]\(.*?\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\{\{<[^>]+>\}\}/g, ' ')
    .replace(/\{\{%[^%]+%\}\}/g, ' ')
    .replace(/[#>*_~\-]{1,}/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getExcerpt(text, maxLength = 320) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

function shouldSkipRelative(relativePath) {
  const parts = relativePath.split(path.sep);
  if (parts.some(part => SKIP_DIRS.has(part))) return true;

  const base = path.basename(relativePath);
  if (SKIP_FILES.has(base)) return true;

  return false;
}

function slugToUrl(relativePath, frontMatter) {
  if (frontMatter.url) {
    return frontMatter.url.startsWith('/') ? frontMatter.url : `/${frontMatter.url}`;
  }

  const withoutExt = relativePath.replace(/\\/g, '/').replace(/\.md$/, '');
  return `/${withoutExt}/`;
}

function collectMarkdownFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      if (shouldSkipRelative(relativePath)) continue;
      files.push(...collectMarkdownFiles(fullPath, baseDir));
      continue;
    }

    if (!entry.name.endsWith('.md')) continue;
    if (shouldSkipRelative(relativePath)) continue;

    files.push(fullPath);
  }

  return files;
}

function buildGlossaryItem(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const frontMatter = parseFrontMatter(raw);
  const body = stripFrontMatter(raw);
  const cleanBody = cleanMarkdown(body);

  const relativePath = path.relative(CONTENT_DIR, filePath);
  const fallbackTitle = path.basename(filePath, '.md')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  const title =
    frontMatter.title ||
    frontMatter.linkTitle ||
    fallbackTitle;

  return {
    title,
    content: getExcerpt(cleanBody),
    fullContent: cleanBody,
    url: slugToUrl(relativePath, frontMatter),
    file: relativePath.replace(/\\/g, '/'),
  };
}

function main() {
  ensureDir(OUTPUT_DIR);

  const files = collectMarkdownFiles(CONTENT_DIR);
  const glossary = files
    .map(buildGlossaryItem)
    .sort((a, b) => a.title.localeCompare(b.title));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(glossary, null, 2), 'utf8');

  console.log(`Generated ${glossary.length} glossary entries at ${OUTPUT_FILE}`);
}

main();
