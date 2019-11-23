/* eslint-disable import/extensions */
import StickersMenager from './stickersMenagerClass.js';

const stickersMenager = new StickersMenager();
const stickers = stickersMenager.loadAllStickers();
stickers.forEach((sticker) => {
  stickersMenager.createSticker(sticker.title, sticker.date,
    sticker.time, sticker.description, sticker.id);
});

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
};

const handleAbandonStickerClick = () => {
  const addStickerMenu = document.querySelector('.add-sticker-menu');
  addStickerMenu.classList.toggle('add-sticker-menu--active');
};

const handleSubmitStickerClick = () => {
  event.preventDefault();
  const stickerFormTitleInput = document.querySelector('.add-sticker-menu__sticker-title-input').value;
  const stickerFormDateInput = document.querySelector('.add-sticker-menu__sticker-date-input').value;
  const stickerFormTimeInput = document.querySelector('.add-sticker-menu__sticker-time-input').value;
  const stickerFormTextarea = document.querySelector('.add-sticker-menu__sticker-textarea').value;

  const sticker = stickersMenager.createSticker(stickerFormTitleInput, stickerFormDateInput,
    stickerFormTimeInput, stickerFormTextarea);
  stickersMenager.setStickerId(sticker);
  stickersMenager.addSticker(sticker);
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
document.querySelector('#add-sticker').addEventListener('click', handleAddStickerClick);
document.querySelectorAll('.site-header__btn').forEach((btn) => btn.addEventListener('click', handleMenuClick));
document.querySelector('.add-sticker-menu__form').addEventListener('submit', handleSubmitStickerClick);
document.querySelector('.add-sticker-menu__abandon-sticker').addEventListener('click', handleAbandonStickerClick);
