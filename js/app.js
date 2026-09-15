document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 800, offset: 100 });
  }

  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.service-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.filter;
      
      buttons.forEach(b => {
        b.classList.remove('bg-brand-teal', 'text-white', 'border-brand-teal', 'shadow-md', 'active');
        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      });
      
      e.currentTarget.classList.add('bg-brand-teal', 'text-white', 'border-brand-teal', 'shadow-md', 'active');
      e.currentTarget.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');

      cards.forEach(card => {
        if(category === 'todos' || card.dataset.category === category) {
          card.style.display = 'block';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });
});