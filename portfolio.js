var typed = new Typed('#element', {
  strings: ['an Athlete.', 'a seroius Gamer.',  '<i>occasionaly</i>, a Photographer.', 'a passionate Web Developer.'],
  typeSpeed: 45,
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