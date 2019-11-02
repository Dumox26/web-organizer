import storageRef from './main.js'

class Sticker {
  constructor(title, date, time, description) {
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.appendHtmlStickerToDOM();
    this.id;
  }

  createHtmlSticker = () => {
    const innerHtmlSticker = `
        <header class="sticker__header">
          <h2 class="sticker__title">${this.title}</h2>
          <div class="sticker__time-cnt">
            <time datetime="" class="sticker__time">
              ${this.date}
            </time>
          </div>
          <div class="sticker__nav-cnt">
            <ul class="sticker__nav-list">
              <li class="sticker__nav-item"><button class="sticker__nav-button">Dodaj</button></li>
              <li class="sticker__nav-item"><button id="stickerDeleteBtn" class="sticker__nav-button">Usuń</button></li>
              <li class="sticker__nav-item"><button class="sticker__nav-button">testowy</button></li>
            </ul>
          </div>
        </header>
      <div class="sticker__content">
        ${this.description}
      </div>`
    const htmlSticker = document.createElement('article');
    htmlSticker.classList.add('sticker');
    htmlSticker.innerHTML = innerHtmlSticker;
    return htmlSticker;
  }

  appendHtmlStickerToDOM = () => {
    const stickerHtml = this.createHtmlSticker();
    this.bindStickerBtn(stickerHtml);
    const stickersHtmlCnt = document.querySelector('.main');
    stickersHtmlCnt.appendChild(stickerHtml);
  }

  deleteSticker = (stickerHtml) => {
    stickerHtml.remove();
    const storage = storageRef;
    storage.removeStickerFromStorage(this);
  }

  bindStickerBtn = (stickerHtml) => {
    const stickerBtn = stickerHtml.querySelector('#stickerDeleteBtn');
    stickerBtn.addEventListener('click', () => {
      this.deleteSticker(stickerHtml);
    });
  }

  // addStickerToColection = (storage) => {
  //   this.stickersColection.push(sticker);
  // }
};

export default Sticker;
