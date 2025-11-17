const typed = new Typed('#element', {
  strings: ['an Athlete.', 'a serious Gamer.',  '<i>occasionally</i>, a Photographer.', 'a passionate Web Developer.'],
  typeSpeed: 75,
  loop: true,
});

  // Smooth scroll to section when link is clicked
  document.querySelectorAll('nav .right ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
    });
  });

  // Toggle navigation visibility on small screens
  const nav = document.querySelector('nav');
  const hamburgerToggle = document.qureySelcetor('.hamburger-toggle');

  if (nav && hamburgerToggle) {
    hamburgerToggle.addEventListener('click', () => {
      const isExpanded = hamburgerToggle.getAttribute('aria-expanded') === 'true';
      hamburgerToggle.setAttribute('aria-expanded', String(!isExpanded));
      nav.classList.toggle('is-open', !isExpanded);
    });
  }