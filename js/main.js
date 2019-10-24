// // const x = document.querySelector('.hamburger-btn');
// // const y = document.querySelector('.site-header__navigation');
// // const z = document.querySelector('.form-btn');
// // const v = document.querySelector('.site-header__form');
// // x.addEventListener('click', () => {
// //   x.classList.toggle('hamburger-btn--active');
// //   y.classList.toggle('site-header__navigation--active');
// // });

// z.addEventListener('click', () => {
//   v.classList.toggle('site-header__form--active');
// });

const handleMenuClick = () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const siteHeaderNav = document.querySelector('.site-header__navigation');
  hamburgerBtn.classList.toggle('hamburger-btn--active');
  siteHeaderNav.classList.toggle('site-header__navigation--active');
};

const handleSearchClick = () => {
  const siteHeaderForm = document.querySelector('.site-header__form');
  siteHeaderForm.classList.toggle('site-header__form--active');
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
