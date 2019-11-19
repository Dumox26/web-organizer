import Storage from './storageClass.js';

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

  removeStickerFromStorage = (stickerId) => {
    const stickers = this.loadAllStickers();
    const newStickersArray = stickers.filter((elem) => {
      return elem.id != stickerId;
    })
    this.saveData(newStickersArray, this.storageKey);
  }

  setStickerId = (sticker) => {
    const stickers = this.loadAllStickers();
    const length = stickers.length;
    if (length === 0) {
      sticker.newId = 1;
    } else {
      sticker.newId = stickers[length - 1].id + 1;
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