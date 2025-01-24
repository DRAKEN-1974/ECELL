document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('active');
  });

  const closeBtn = card.querySelector('.close-btn');
  if(closeBtn) {
      closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.remove('active');
      });
  }
});

// Parallax effect
document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});