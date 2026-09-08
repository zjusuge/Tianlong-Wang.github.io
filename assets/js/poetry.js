(() => {
  'use strict';
  const form = document.querySelector('#poetry-search');
  if (form) {
    const rows = [...document.querySelectorAll('#poem-index li')];
    const query = document.querySelector('#poem-query');
    const book = document.querySelector('#poem-book');
    const genre = document.querySelector('#poem-form');
    const more = document.querySelector('#more-poems');
    const random = document.querySelector('#random-poem');
    let limit = 20, matches = rows;
    const render = () => {
      const terms = query.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      matches = rows.filter(row => (book.value === 'all' || row.dataset.book === book.value) && (genre.value === 'all' || row.dataset.form === genre.value) && terms.every(term => (row.textContent + row.dataset.verse).toLocaleLowerCase().includes(term)));
      const visible = new Set(matches.slice(0, limit));
      rows.forEach(row => { row.hidden = !visible.has(row); });
      document.querySelector('#poetry-result-count').textContent = `找到 ${matches.length} 篇作品 · 已展示 ${Math.min(limit, matches.length)} 篇`;
      document.querySelector('#poetry-empty').hidden = matches.length > 0;
      more.hidden = matches.length <= limit;
      random.disabled = matches.length === 0;
    };
    form.hidden = false; random.hidden = false;
    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('input', () => { limit = 20; render(); });
    form.addEventListener('change', () => { limit = 20; render(); });
    form.addEventListener('reset', () => { setTimeout(() => { limit = 20; render(); }, 0); });
    more.addEventListener('click', () => { limit += 20; render(); });
    random.addEventListener('click', () => { if (matches.length) location.href = matches[Math.floor(Math.random() * matches.length)].querySelector('a').href; });
    render();
  }
  const verse = document.querySelector('#poem-verse');
  if (verse) {
    const get = key => { try { return localStorage.getItem(key); } catch { return null; } };
    const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Reading works without storage. */ } };
    let size = Math.min(27, Math.max(15, Number(get('poetry-font')) || 19));
    let night = get('poetry-night') === 'true';
    const theme = document.querySelector('#reader-theme');
    const refresh = () => {
      document.documentElement.style.setProperty('--verse-size', `${size}px`);
      document.body.dataset.theme = night ? 'night' : 'day';
      theme.textContent = night ? '日读' : '夜读';
      theme.setAttribute('aria-pressed', String(night));
      document.querySelector('#font-smaller').disabled = size <= 15;
      document.querySelector('#font-larger').disabled = size >= 27;
    };
    document.querySelector('.reader-tools').hidden = false;
    document.querySelector('#font-smaller').addEventListener('click', () => { size = Math.max(15, size - 2); save('poetry-font', size); refresh(); });
    document.querySelector('#font-larger').addEventListener('click', () => { size = Math.min(27, size + 2); save('poetry-font', size); refresh(); });
    theme.addEventListener('click', () => { night = !night; save('poetry-night', night); refresh(); });
    const copy = document.querySelector('#copy-poem-link');
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      const status = document.querySelector('#copy-link-status');
      try { await navigator.clipboard.writeText(location.href); status.textContent = '链接已复制'; }
      catch { status.textContent = `本篇链接：${location.href}`; }
    });
    refresh();
  }
})();
