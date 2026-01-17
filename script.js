const sections = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
