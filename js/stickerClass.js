class Sticker {
  constructor(title, date, time, description = '', id = 0, menagerRef) {
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
    this.id = id;
    this.menagerRef = menagerRef;
    this.appendHtmlStickerToDOM();
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

  removeSticker = (stickerHtml) => {
    stickerHtml.remove();
    console.log(this.menagerRef);
    this.menagerRef.removeStickerFromStorage(this.id);
  }

  bindStickerBtn = (stickerHtml) => {
    const stickerBtn = stickerHtml.querySelector('#stickerDeleteBtn');
    stickerBtn.addEventListener('click', () => {
      this.removeSticker(stickerHtml);
    });

    const stickerHtmlTitle = stickerHtml.querySelector('.sticker__input-text');
    const stickerHtmlDate = stickerHtml.querySelector('.sticker__input-date');
    const stickerHtmlTime = stickerHtml.querySelector('.sticker__input-time');
    const stickerHtmlDescription = stickerHtml.querySelector('.sticker__content');

    stickerHtmlTitle.addEventListener('change', () => {
      this.newTitle = stickerHtmlTitle.value;
      this.menagerRef.submitChangesInStorage(this);
    });

    stickerHtmlDate.addEventListener('change', () => {
      this.newDate = stickerHtmlDate.value;
      this.menagerRef.submitChangesInStorage(this);
    });

    stickerHtmlTime.addEventListener('change', () => {
      this.newTime = stickerHtmlTime.value;
      this.menagerRef.submitChangesInStorage(this);
    });

    stickerHtmlDescription.addEventListener('change', () => {
      this.newDescription = stickerHtmlDescription.value;
      this.menagerRef.submitChangesInStorage(this);
    });
  }
};

export default Sticker;
