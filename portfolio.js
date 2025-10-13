var typed = new Typed('#element', {
  strings: ['an Athlete.', 'a seroius Gamer.',  '<i>occasionally</i>, a Photographer.', 'a passionate Web Developer.'],
  typeSpeed: 75,
  loop: true,
});

  // Smooth scroll to section when link is clicked
  document.querySelectorAll('nav .right ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
  });