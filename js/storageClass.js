class Storage {
  constructor() {
    if (this.constructor === Storage) {
      throw new Error('Nie mozna stworzyc obiektu klasy abstrakcyjnej');
    }
  }

  saveData = (data, key) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  loadData = (key, defaultValue = {}) => {
    const data = window.localStorage.getItem(key);

    return (data) ? JSON.parse(data) : defaultValue;
  }
}
export default Storage;
