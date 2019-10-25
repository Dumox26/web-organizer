// eslint-disable-next-line import/extensions
import StickerClass from './stickerClass.js';

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

const handleAddStickerClick = () => {
  const addStickerMenu = document.querySelector('.add-sticker-menu');
  addStickerMenu.classList.toggle('add-sticker-menu--active');
  const sticker = new StickerClass('12321', '1441');
  console.log(sticker);
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
document.querySelector('#add-sticker').addEventListener('click', handleAddStickerClick);
