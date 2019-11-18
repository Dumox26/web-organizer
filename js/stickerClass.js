import StickersMenager from './stickersMenagerClass.js'

class Sticker extends StickersMenager {
  constructor(title, date, time, description, id = 0) {
    super();
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.appendHtmlStickerToDOM();
    this.id = id;
  }

  set newId(id) {
    this.id = id;
  }

  set newTitle(title) {
    this.title = title;
  }

  set newDate(newDate) {
    this.date = newDate;
  }

  set newTime(newTime) {
    this.time = newTime;
  }

  set newDescription(newDescription) {
    this.description = newDescription;
  }

  createHtmlSticker = () => {
    const innerHtmlSticker = `
      <header class="sticker__header">
        <form action="get" class="sticker__form">
          <input type="text" class="sticker__input-text" required>
          <input type="date" name="" class="sticker__input-date">
          <input type="time" class="sticker__input-time">
          <button type="submit" class="sticker__submit" hidden></button>
        </form>
        <div class="sticker__nav-cnt">
          <ul class="sticker__nav-list">
            <li class="sticker__nav-item"><button class="sticker__nav-button">Modyfikuj</button></li>
            <li class="sticker__nav-item"><button id="stickerDeleteBtn" class="sticker__nav-button">Usuń</button></li>
            <li class="sticker__nav-item"><button class="sticker__nav-button">testowy</button></li>
          </ul>
        </div>
      </header>
      <div class="sticker__content">
        <form action="" method="get" class="sticker__form-content">
          <textarea name="" id="" cols="15" rows="10" class="sticker__textarea"></textarea>
          <button type="submit" class="sticker__submit-content" hidden></button>
          </form>
      </div>`
    const htmlSticker = document.createElement('article');
    htmlSticker.classList.add('sticker');
    htmlSticker.innerHTML = innerHtmlSticker;
    return htmlSticker;
  }

  fillStickerHtmlObjectWithData = () => {
    const stickerHtml = this.createHtmlSticker();
    const stickerHtmlTitle = stickerHtml.querySelector('.sticker__input-text');
    const stickerHtmlDate = stickerHtml.querySelector('.sticker__input-date');
    const stickerHtmlTime = stickerHtml.querySelector('.sticker__input-time');
    const stickerHtmlTextarea = stickerHtml.querySelector('.sticker__textarea');

    stickerHtmlTitle.value = this.title;
    stickerHtmlDate.value = this.date;
    stickerHtmlTime.value = this.time;
    stickerHtmlTextarea.value = this.description;
    return stickerHtml;
  }

  appendHtmlStickerToDOM = () => {
    const stickerHtml = this.fillStickerHtmlObjectWithData();
    this.bindStickerBtn(stickerHtml);
    const stickersHtmlCnt = document.querySelector('.main');
    stickersHtmlCnt.appendChild(stickerHtml);
  }

  removeStickerFromDOM = (stickerHtml) => {
    stickerHtml.remove();
    this.removeStickerFromStorage(this.id);
  }

  submitChangesInStickerHeader = (stickerHtml) => {
    const stickerHtmlTitle = stickerHtml.querySelector('.sticker__input-text');
    const stickerHtmlDate = stickerHtml.querySelector('.sticker__input-date');
    const stickerHtmlTime = stickerHtml.querySelector('.sticker__input-time');

    this.newTitle = stickerHtmlTitle.value;
    this.newDate = stickerHtmlDate.value;
    this.newTime = stickerHtmlTime.value;

    this.submitChangesInStorage(this);
  }

  // submitChangesInStickerContent = (stickerHtml) => {
  //   const stickerHtmlTextarea = stickerHtml.querySelector('.sticker__textarea');
  //   this.newDescription(stickerHtmlTextarea.value);

  //   this.submitChangesInStorage(this);
  // }

  bindStickerBtn = (stickerHtml) => {
    const stickerBtn = stickerHtml.querySelector('#stickerDeleteBtn');
    stickerBtn.addEventListener('click', () => {
      this.removeStickerFromDOM(stickerHtml);
    });

    const stickerForm = stickerHtml.querySelector('.sticker__form');
    stickerForm.addEventListener('submit', () => {
      event.preventDefault();
      this.submitChangesInStickerHeader(stickerHtml);
    });

    // const stickerContentForm = stickerHtml.querySelector('.sticker__form-content');
    // stickerContentForm.addEventListener('submit', () => {
    //   event.preventDefault();
    //   console.log("submit");
    //   this.submitChangesInStickerContent(stickerHtml);
    // });
  }
};

export default Sticker;
