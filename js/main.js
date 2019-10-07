const x = document.querySelector('.hamburger-btn');
const y = document.querySelector('.site-header__navigation');
x.addEventListener('click', () => {
  x.classList.toggle('hamburger-btn--active');
  y.classList.toggle('site-header__navigation--active');
});
