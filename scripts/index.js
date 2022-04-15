import './project-card.js';

window.addEventListener('load', () => {
  const tm = document.getElementById('current-year');
  tm.innerText = new Date().getFullYear();
});
