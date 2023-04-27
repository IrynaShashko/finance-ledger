const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    header.classList.add('is-scrolling');
  } else {
    header.classList.remove('is-scrolling');
  }
});
