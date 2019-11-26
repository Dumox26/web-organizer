import Storage from './storageClass.js';
import Sticker from './stickerClass.js';

class StickersMenager extends Storage {
  constructor() {
    super();
    this.storageKey = "stickersArray";
  }

  loadAllStickers = () => {
    return this.loadData(this.storageKey, []);
  }

  addSticker = (sticker) => {
    const stickers = this.loadAllStickers();
    stickers.push(sticker);
    this.saveData(stickers, this.storageKey);
  }

  createSticker = (title, date, time, description, id) => {
    const sticker = new Sticker(title, date, time, description, id, this);
    return sticker;
  }

  removeStickerFromStorage = (id) => {
    const stickers = this.loadAllStickers();
    const newStickersArray = stickers.filter((elem) => {
      return elem.id !== id;
    })
    this.saveData(newStickersArray, this.storageKey);
  }

  setStickerId = () => {
    const stickers = this.loadAllStickers();
    const length = stickers.length;
    if (length === 0) {
      return 1;
    } else {
      return stickers[length - 1].id + 1;
    }
  }

  submitChangesInStorage = (sticker) => {
    const stickers = this.loadAllStickers();
    stickers.forEach(element => {
      if (element.id === sticker.id) {
        Object.assign(element, sticker);
      }
    });
    this.saveData(stickers, this.storageKey);
  }
}

export default StickersMenager;