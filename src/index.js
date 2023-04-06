import '../src/index.css';
const section = document.querySelectorAll('#section');

section.forEach((item) => {
  item.addEventListener('click', () => {
    const items = Array.from(document.querySelectorAll('#section'));
    items.map((item) => item.classList.remove('tab_active'));
    item.classList.toggle('tab_active');
  });
});

const link = document.querySelectorAll('#link');

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
});
