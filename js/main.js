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

const createSticker = (stickerTitleValue, stickerDateValue, stickerTimeValue, stickerTextValue) => {
  const sticker = new StickerClass(stickerTitleValue, stickerDateValue,
    stickerTimeValue, stickerTextValue);
  console.log(sticker);
  sticker.saveStickerInLocalStorage();
  sticker.createHtmlSticker();
};

const handleSubmitStickerClick = () => {
  event.preventDefault();
  const stickerFormTitleInput = document.querySelector('.add-sticker-menu__sticker-title-input');
  const stickerFormDateInput = document.querySelector('.add-sticker-menu__sticker-date-input');
  const stickerFormTimeInput = document.querySelector('.add-sticker-menu__sticker-time-input');
  const stickerFormTextarea = document.querySelector('.add-sticker-menu__sticker-textarea');
  console.log(stickerFormDateInput);
  console.log('test');
  createSticker(stickerFormTitleInput.value, stickerFormDateInput.value, stickerFormTimeInput.value,
    stickerFormTextarea.value);
};

const handleAddStickerClick = () => {
  const addStickerMenu = document.querySelector('.add-sticker-menu');
  addStickerMenu.classList.toggle('add-sticker-menu--active');
  // const sticker = new StickerClass('12321', '1441');
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
document.querySelector('#add-sticker').addEventListener('click', handleAddStickerClick);
document.querySelectorAll('.site-header__btn').forEach((btn) => btn.addEventListener('click', handleMenuClick));
document.querySelector('.add-sticker-menu__submit-sticker').addEventListener('click', handleSubmitStickerClick);
