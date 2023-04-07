import '../src/index.css';
import {
  section,
  link,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
} from './utils/constants.js';

// Listener on tabs

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

// Effect pressing the button

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ArrowLeft') {
    arrowLeft.style.boxShadow = 'none';
    arrowLeft.style.transform = 'translateY(4)';
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'ArrowLeft') {
    arrowLeft.style.boxShadow = '0 3px #24856d';
    arrowLeft.style.transform = 'translateY(0)';
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ArrowRight') {
    arrowRight.style.boxShadow = 'none';
    arrowRight.style.transform = 'translateY(4)';
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'ArrowRight') {
    arrowRight.style.boxShadow = '0 3px #24856d';
    arrowRight.style.transform = 'translateY(0)';
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ArrowUp') {
    arrowUp.style.boxShadow = 'none';
    arrowUp.style.transform = 'translateY(4)';
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'ArrowUp') {
    arrowUp.style.boxShadow = '0 3px #24856d';
    arrowUp.style.transform = 'translateY(0)';
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ArrowDown') {
    arrowDown.style.boxShadow = 'none';
    arrowDown.style.transform = 'translateY(4)';
  }
});

document.addEventListener('keyup', (evt) => {
  if (evt.code === 'ArrowDown') {
    arrowDown.style.boxShadow = '0 3px #24856d';
    arrowDown.style.transform = 'translateY(0)';
  }
});
