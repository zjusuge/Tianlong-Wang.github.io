(() => {
  const button = document.getElementById('print-cv');
  if (button) { button.hidden = false; button.addEventListener('click', () => window.print()); }
})();
