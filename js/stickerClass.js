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
        <div class="sticker__drag">Przytrzymaj by przesunąć</div>
        <form action="get" class="sticker__form">
          <input type="text" id="sticker-title" class="sticker__input" required>
          <input type="date" id="sticker-date" name="" class="sticker__input">
          <input type="time" id="sticker-time" class="sticker__input">
          <button type="submit" class="sticker__submit" hidden></button>
        </form>
        <div class="sticker__nav-cnt">
          <ul class="sticker__nav-list">
            <li class="sticker__nav-item"><button id="sticker-delete-btn" class="sticker__nav-button">Usuń</button></li>
            <li class="sticker__nav-item"><button id="sticker-expand-btn" class="sticker__nav-button">rozwin</button></li>
          </ul>
        </div>
      </header>
      <div class="sticker__content">
        <form action="" method="get" class="sticker__form-content">
          <textarea name="" id="" cols="15" rows="10" class="sticker__textarea"></textarea>
          <button type="submit" class="sticker__submit-content" hidden></button>
        </form>
      </div>
      <input type = "checkbox" name = "" class="sticker__delete-checkbox"
       id = "delete-check" >`;

    const htmlSticker = document.createElement('article');
    htmlSticker.classList.add('sticker');
    htmlSticker.innerHTML = innerHtmlSticker;

    return htmlSticker;
  }

  fillStickerHtmlObjectWithData = () => {
    const stickerHtml = this.createHtmlSticker();
    const stickerHtmlTitle = stickerHtml.querySelector('#sticker-title');
    const stickerHtmlDate = stickerHtml.querySelector('#sticker-date');
    const stickerHtmlTime = stickerHtml.querySelector('#sticker-time');
    const stickerHtmlTextarea = stickerHtml.querySelector('.sticker__textarea');

    stickerHtmlTitle.value = this.title;
    stickerHtmlDate.value = this.date;
    stickerHtmlTime.value = this.time;
    stickerHtmlTextarea.value = this.description;

    return stickerHtml;
  }

  appendHtmlStickerToDOM = () => {
    const stickerHtml = this.fillStickerHtmlObjectWithData();
    stickerHtml.setAttribute('id', this.id);
    stickerHtml.classList.add('draggable');

    this.bindStickerDrag(stickerHtml);
    this.bindStickerBtn(stickerHtml);

    const stickersHtmlCnt = document.querySelector('.main');

    stickersHtmlCnt.appendChild(stickerHtml);
  }

  removeSticker = (stickerHtml) => {
    stickerHtml.remove();
    this.menagerRef.removeStickerFromStorage(this.id);
  }

  expandFoldStickerContent = (stickerHtml) => {
    const stickerContent = stickerHtml.querySelector('.sticker__content');
    const stickerTextarea = stickerContent.querySelector('.sticker__form-content');

    stickerContent.classList.toggle('sticker__content--expanded');
    stickerTextarea.classList.toggle('sticker__form-content--visible');

    if (stickerContent.classList.contains('sticker__content--expanded')) {
      event.target.textContent = "zwiń";
    } else {
      event.target.textContent = "rozwiń";
    }
  }

  bindStickerDrag = (stickerHtml) => {
    const dragArea = stickerHtml.querySelector('.sticker__drag');

    dragArea.addEventListener('mousedown', (event) => {
      let posX = event.clientX;
      let posY = event.clientY;

      stickerHtml.classList.add('sticker--draged');

      console.log(`PosX = ${posX}, PosY = ${posY}`);

      const mousemove = (event) => {
        let newPosX = posX - event.clientX;
        let newPosY = posY - event.clientY;

        console.log(`newPosX = ${newPosX}, newPosY = ${newPosY}`);

        const stickerHtmlPos = stickerHtml.getBoundingClientRect();
        console.log(stickerHtmlPos);

        stickerHtml.style.left = stickerHtmlPos.left - newPosX + 'px';
        stickerHtml.style.top = stickerHtmlPos.top - newPosY + 'px';

        posX = event.clientX;
        posY = event.clientY;
        console.log(`style-left = ${stickerHtml.style.left}, styleTop = ${stickerHtml.style.top}`);
      }

      const mouseUp = () => {
        window.removeEventListener('mousemove', mousemove, false);
        window.removeEventListener('mouseup', mouseUp, false);
        stickerHtml.classList.remove('sticker--draged');
      }

      window.addEventListener('mousemove', mousemove, false);

      window.addEventListener('mouseup', mouseUp, false);
    }, false);
  }

  bindStickerBtn = (stickerHtml) => {
    const stickerDeleteBtn = stickerHtml.querySelector('#sticker-delete-btn');
    const stickerExpandBtn = stickerHtml.querySelector('#sticker-expand-btn');

    stickerDeleteBtn.addEventListener('click', () => {
      this.removeSticker(stickerHtml);
    });

    stickerExpandBtn.addEventListener('click', () => {
      this.expandFoldStickerContent(stickerHtml);
    })

    const stickerHtmlTitle = stickerHtml.querySelector('#sticker-title');
    const stickerHtmlDate = stickerHtml.querySelector('#sticker-date');
    const stickerHtmlTime = stickerHtml.querySelector('#sticker-time');
    const stickerHtmlDescription = stickerHtml.querySelector('.sticker__textarea');
    const stickerCheckbox = stickerHtml.querySelector('.sticker__delete-checkbox');

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

    stickerCheckbox.addEventListener('change', () => {
      console.log("zmiana");
    });
  }
};

export default Sticker;
