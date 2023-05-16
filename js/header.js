const header = document.querySelector('.header');
const headerHeight = window.innerWidth < 768 ? 120 : 70;

window.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    header.classList.add('is-scrolling');
  } else {
    header.classList.remove('is-scrolling');
  }
});
