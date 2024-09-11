document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.content');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('data-target');
        
        // Hide current active section
        document.querySelector('.content.active').classList.remove('active');
        
        // Show the selected section
        document.getElementById(targetId).classList.add('active');
      });
    });
  });