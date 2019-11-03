class StorageMenager {
  constructor() {
    this.stickersColection = [];
    this.stickerStorageKey = 'stickersArray';
  }

  saveStickersInLocalStorage = () => {
    localStorage.setItem(this.stickerStorageKey, JSON.stringify(this.stickersColection));
  }

  loadStickersFromLocalStorage = () => {
    if (localStorage.getItem(this.stickerStorageKey) != null) {
      this.stickersColection = JSON.parse(localStorage.getItem(this.stickerStorageKey));
      return true;
    } else {
      return false;
    }
  }

  setStickerId = (sticker) => {
    const length = this.stickersColection.length;
    if (this.stickersColection.length == 0) {
      sticker.stickerId = 1;
    } else {
      sticker.stickerId = this.stickersColection[length - 1].id + 1;
    }
  }

  addStickerToColection = (sticker) => {
    this.setStickerId(sticker);
    this.stickersColection.push(sticker);
  }

  removeStickerFromStorage = (sticker) => {
    let stickersColectionTmp = [];
    stickersColectionTmp = this.stickersColection.filter((elem) => {
      return elem.id != sticker.id;
    });
    this.stickersColection = stickersColectionTmp;
    this.saveStickersInLocalStorage();
    if (JSON.parse(localStorage.getItem(this.stickerStorageKey)).length == 0) {
      localStorage.removeItem(this.stickerStorageKey);
    }
  }
}
export default StorageMenager;
