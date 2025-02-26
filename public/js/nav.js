document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langDropdownBtn');
    const langContent = document.getElementById('langDropdownContent');
  
    // Toggle dropdown on button click
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
  });
  