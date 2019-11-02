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

  addStickerToColection = (sticker) => {
    this.stickersColection.push(sticker);
  }

  removeStickerFromStorage = (sticker) => {
    let stickersColectionTmp = [];
    stickersColectionTmp = this.stickersColection.filter((elem) => {
      return elem.title != sticker.title;
    });
    this.stickersColection = stickersColectionTmp;
    this.saveStickersInLocalStorage();
    if (JSON.parse(localStorage.getItem(this.stickerStorageKey)).length == 0) {
      localStorage.removeItem(this.stickerStorageKey);
      window.localStorage.clear();
      console.log("fsafaf");
    }
  }
}
const storage = new StorageMenager();
if (storage.loadStickersFromLocalStorage()) {
  storage.stickersColection.forEach((stickerObj) => {
    const sticker = new Sticker(stickerObj.title,
      stickerObj.data, stickerObj.time, stickerObj.description);
  });
}
export default StorageMenager;
