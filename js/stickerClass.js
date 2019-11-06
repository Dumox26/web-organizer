import storageRef from './main.js'

class Sticker {
  constructor(title, date, time, description, id = 0) {
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.appendHtmlStickerToDOM();
    this.id = id;
  }

  set stickerId(id) {
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
        </form>
      </div>`
    const htmlSticker = document.createElement('article');
    htmlSticker.classList.add('sticker');
    htmlSticker.innerHTML = innerHtmlSticker;
    return htmlSticker;
  }

  fillStickerHtmlObject = () => {
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
    const stickerHtml = this.fillStickerHtmlObject();
    this.bindStickerBtn(stickerHtml);
    const stickersHtmlCnt = document.querySelector('.main');
    stickersHtmlCnt.appendChild(stickerHtml);
  }

  deleteSticker = (stickerHtml) => {
    stickerHtml.remove();
    const storage = storageRef;
    storage.removeStickerFromStorage(this);
  }

  submitChangesInStickerHeader = (stickerHtml) => {
    const stickerHtmlTitle = stickerHtml.querySelector('.sticker__input-text');
    const stickerHtmlDate = stickerHtml.querySelector('.sticker__input-date');
    const stickerHtmlTime = stickerHtml.querySelector('.sticker__input-time');

    this.newTitle = stickerHtmlTitle.value;
    this.newDate = stickerHtmlDate.value;
    this.newTime = stickerHtmlTime.value;

    const storage = storageRef;
    storage.submitChangesInStorage(this);
  }

  submitChangesInStickerContent = (stickerHtml) => {
    const stickerHtmlTextarea = stickerHtml.querySelector('.sticker__textarea');
    this.newDescription(stickerHtmlTextarea.value);
  }

  bindStickerBtn = (stickerHtml) => {
    const stickerBtn = stickerHtml.querySelector('#stickerDeleteBtn');
    stickerBtn.addEventListener('click', () => {
      this.deleteSticker(stickerHtml);
    });

    const stickerForm = stickerHtml.querySelector('.sticker__form');
    stickerForm.addEventListener('submit', () => {
      event.preventDefault();
      this.submitChangesInStickerHeader(stickerHtml);
    });

    const stickerContentForm = stickerHtml.querySelector('.sticker__form-content');
    stickerContentForm.addEventListener('submit', () => {
      event.preventDefault();
      this.submitChangesInStickerContent(stickerHtml);
    })
  }
};

export default Sticker;


{/* <header class="sticker__header">
  <h2 class="sticker__title">${this.title}</h2>
  <div class="sticker__time-cnt">
    <time datetime="" class="sticker__time">
      ${this.date}
    </time>
  </div>
  <div class="sticker__nav-cnt">
    <ul class="sticker__nav-list">
      <li class="sticker__nav-item"><button class="sticker__nav-button">Modyfikuj</button></li>
      <li class="sticker__nav-item"><button id="stickerDeleteBtn" class="sticker__nav-button">Usuń</button></li>
      <li class="sticker__nav-item"><button class="sticker__nav-button">testowy</button></li>
    </ul>
  </div>
</header>
  <div class="sticker__content">
    ${this.description}
  </div>` */}