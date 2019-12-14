/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */

const toggleBlur = () => {
  const blur = document.querySelector('.blur');

  blur.classList.toggle('blur--active');
};

const handleMenuClick = () => {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const siteHeaderNav = document.querySelector('.site-header__navigation');

  hamburgerBtn.classList.toggle('hamburger-btn--active');
  siteHeaderNav.classList.toggle('site-header__navigation--active');
};

const handleSearchClick = () => {
  const siteHeaderForm = document.querySelector('.site-header__form-search');
  siteHeaderForm.classList.toggle('site-header__form-search--active');
};

const toggleStickerAddMenu = () => {
  const addStickerMenu = document.querySelector('.site-header__add-sticker-menu');
  addStickerMenu.classList.toggle('site-header__add-sticker-menu--active');

  const addStickerMenuInputTitle = addStickerMenu.querySelector('#add-title-input');
  addStickerMenuInputTitle.focus();
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

const toggleMenus = () => {
  const siteHeaderBranding = document.querySelector('.site-header__branding');
  const siteHeaderBtns = document.querySelector('.site-header__buttons-cnt');
  const siteHeaderNavigation = document.querySelector('.site-header__navigation');
  const siteHeaderNav = document.querySelector('.site-header__nav');

  siteHeaderBranding.classList.toggle('site-header__branding--hidden');
  siteHeaderBtns.classList.toggle('site-header__buttons-cnt--hidden');
  siteHeaderNavigation.classList.toggle('site-header__navigation--hidden');
  siteHeaderNav.classList.toggle('site-header__nav--center');
};

const handleDeleteClick = () => {
  toggleMenus();
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
  toggleMenus();
};

const handleConfirmDeleteAllBtnClick = () => {
  toggleDeleteStickersMenu();
  toggleMenus();
};

document.querySelector('.hamburger-btn').addEventListener('click', handleMenuClick);
document.querySelector('.form-btn').addEventListener('click', handleSearchClick);
document.querySelector('#add-sticker-btn').addEventListener('click', toggleStickerAddMenu);
document.querySelector('.site-header__navigation').querySelectorAll('.site-header__btn').forEach((btn) => btn.addEventListener('click', handleMenuClick));
document.querySelector('#cancel-add-button').addEventListener('click', toggleStickerAddMenu);
document.querySelector('#delete-sticker-btn').addEventListener('click', handleDeleteClick);
document.querySelector('#check-all-btn').addEventListener('click', handleSelectAllClick);
document.querySelector('#cancel-remove-btn').addEventListener('click', handleCancelDeleteStickerClick);
document.querySelector('#confirm-remove-btn').addEventListener('click', handleConfirmDeleteAllBtnClick);
document.querySelector('#search-form').addEventListener('submit', handleSearchClick);
