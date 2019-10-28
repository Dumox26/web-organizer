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
}

export default StickerClass;
