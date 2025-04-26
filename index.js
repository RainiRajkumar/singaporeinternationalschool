document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animation trigger
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.course-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight) {
            element.style.opacity = '1';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav-menu');
  
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      btn.classList.toggle('active'); // if you want to animate the icon
    });
  });

  function loadPage(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        document.documentElement.scrollTop = 0;
      })
      .catch((error) => console.error("Error loading page:", error));
  }