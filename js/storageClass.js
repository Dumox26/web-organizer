// /* eslint-disable class-methods-use-this */
// // eslint-disable-next-line import/extensions
// import StickersMenager from './stickerClass.js';

// class StickersMenager {
//     constructor() {
//         this.stickersArray = [];
//     }

//     createSticker(stickerTitle, stickerDate, stickerTime, stickerText) {
//         const sticker = new StickersMenager(stickerTitle, stickerDate, stickerTime, stickerText);
//         sticker.saveStickerInLocalStorage();
//         this.createHtmlSticker(sticker);
//     }

//     createHtmlSticker(stickerObject) {
//         const stickerCnt = document.querySelector('.main');
//         const stickerTemplate = document.querySelector('.sticker-template');
//         const newStickerHtml = stickerTemplate.cloneNode(true);

//         const stickerHtmlTitle = newStickerHtml.querySelector('.sticker__title');
//         // const stickerHtmlDate = newStickerHtml.querySelector('sticker__title');
//         // const stickerHtmlTime = newStickerHtml.querySelector('sticker__title');
//         // const stickerHtmlText = newStickerHtml.querySelector('.sticker__text');

//         stickerHtmlTitle.textContent = stickerObject.title;
//         // stickerHtmlText.value = stickerObject.description;
//         newStickerHtml.classList.remove('sticker-template');
//         stickerCnt.appendChild(newStickerHtml);
//     }
// }

// export default StickersClass;
