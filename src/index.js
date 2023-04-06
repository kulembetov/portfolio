import '../src/index.css';
const section = document.querySelectorAll('#section');
const link = document.querySelectorAll('#link');

section.forEach((item) => {
  item.addEventListener('click', () => {
    const items = Array.from(document.querySelectorAll('#section'));
    items.map((item) => item.classList.remove('tab_active'));
    item.classList.toggle('tab_active');
  });
});

link.forEach((item) => {
  item.addEventListener('click', () => {
    const items = Array.from(document.querySelectorAll('#link'));
    items.map((item) => item.classList.remove('tab_active'));
  });
  item.addEventListener('mouseup', () => {
    item.classList.remove('tab_active');
  });
  item.addEventListener('mousedown', () => {
    item.classList.add('tab_active');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('tab_active');
  });
});
