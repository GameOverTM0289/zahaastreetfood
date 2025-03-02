document.addEventListener('DOMContentLoaded', () => {
  // Language Dropdown
  const langBtn = document.getElementById('langDropdownBtn');
  const langContent = document.getElementById('langDropdownContent');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (langContent.style.display === 'block') {
      langContent.style.display = 'none';
    } else {
      langContent.style.display = 'block';
    }
  });

  // Hide dropdown if clicking outside
  document.addEventListener('click', () => {
    langContent.style.display = 'none';
  });

  // Burger Menu
  const burgerMenuBtn = document.getElementById('burgerMenuBtn');
  const navList = document.getElementById('navList');

  burgerMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
    }
  });

  // Close nav if clicking outside (on mobile)
  document.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navList.style.display = 'none';
    }
  });
});
