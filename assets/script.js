
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const box = document.querySelector('.lightbox');
    const img = box.querySelector('img');
    img.src = link.href;
    img.alt = link.querySelector('img')?.alt || '';
    box.classList.add('open');
  });
});
document.querySelectorAll('.lightbox, .lightbox button').forEach(el => {
  el.addEventListener('click', e => {
    if (e.target.classList.contains('lightbox') || e.target.tagName === 'BUTTON') {
      document.querySelector('.lightbox').classList.remove('open');
      document.querySelector('.lightbox img').src = '';
    }
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
