/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */

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

const toggleStickerAddMenu = () => {
  const addStickerMenu = document.querySelector('.add-sticker-menu');
  addStickerMenu.classList.toggle('add-sticker-menu--active');
};

const toggleCheckBoxinStickers = () => {
  const stickersHtml = document.querySelectorAll('.sticker');
  Array.from(stickersHtml).forEach((stickerHtml) => {
    const stickerCheckbox = stickerHtml.querySelector('.sticker__delete-checkbox');
    stickerCheckbox.classList.toggle('sticker__delete-checkbox--active');
  });
};

const setCheckboxesValueToFalse = () => {
  const stickersHtml = document.querySelectorAll('.sticker');
  Array.from(stickersHtml).forEach((stickerHtml) => {
    const stickerCheckbox = stickerHtml.querySelector('.sticker__delete-checkbox');
    stickerCheckbox.checked = false;
  });
};

const toggleDeleteStickersMenu = () => {
  const deleteStickersBtns = document.querySelector('.site-header__delete-stickers-btns');
  deleteStickersBtns.classList.toggle('site-header__delete-stickers-btns--active');
};

const handleDeleteClick = () => {
  toggleDeleteStickersMenu();
  toggleCheckBoxinStickers();
};

const handleSelectAllClick = () => {
  const stickersHtmlCheckbox = document.querySelectorAll('.sticker__delete-checkbox');
  stickersHtmlCheckbox.forEach((checkbox) => {
    // eslint-disable-next-line no-param-reassign
    checkbox.checked = true;
  });
};

const handleCancelDeleteStickerClick = () => {
  toggleDeleteStickersMenu();
  toggleCheckBoxinStickers();
  setCheckboxesValueToFalse();
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
document.querySelector('#add-sticker').addEventListener('click', toggleStickerAddMenu);
document.querySelectorAll('.site-header__btn').forEach((btn) => btn.addEventListener('click', handleMenuClick));
document.querySelector('.add-sticker-menu__abandon-sticker').addEventListener('click', toggleStickerAddMenu);
document.querySelector('#delete-sticker').addEventListener('click', handleDeleteClick);
document.querySelector('.site-header__btn-check-all').addEventListener('click', handleSelectAllClick);
document.querySelector('.site-header__btn-cancel-remove').addEventListener('click', handleCancelDeleteStickerClick);
