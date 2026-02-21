document.addEventListener('DOMContentLoaded', () => {
  const bars = document.getElementById('bars');
  const nav = document.getElementById('nav');

  if (bars && nav) {
    bars.addEventListener('click', () => nav.classList.toggle('active'));
  }

  // Optional: horizontal scroll controls (only if elements exist)
  const card = document.getElementById('card');
  const scrollLeftBtn = document.getElementById('left');
  const scrollRightBtn = document.getElementById('right');

  if (card && scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => {
      card.scrollBy({ left: -200, behavior: 'smooth' });
    });
  }

  if (card && scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
      card.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
});