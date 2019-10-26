class StickerClass {
  constructor(title, date, description) {
    this.title = title;
    this.date = date;
    this.description = description;
  }

  saveStickerInLocalStorage() {
    try {
      localStorage.setItem(this.title, JSON.stringify(this));
      console.log('sukces');
    } catch (error) {
      console.log(error);
    }
  }

  createHtmlSticker() {
    const stickerCnt = document.querySelector('.main');
    const stickerTemplate = document.querySelector('.sticker-template');
    const newStickerHtml = stickerTemplate.cloneNode(true);
    console.log(newStickerHtml);
    newStickerHtml.classList.remove('sticker-template');
    stickerCnt.appendChild(newStickerHtml);
  }

  fillHtmlSticker() {

  }
}

export default StickerClass;
