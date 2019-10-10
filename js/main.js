const x = document.querySelector('.hamburger-btn');
const y = document.querySelector('.site-header__navigation');
const z = document.querySelector('.form-btn');
const v = document.querySelector('.site-header__form');
x.addEventListener('click', () => {
  x.classList.toggle('hamburger-btn--active');
  y.classList.toggle('site-header__navigation--active');
});

z.addEventListener('click', () => {
  v.classList.toggle('site-header__form--active');
})