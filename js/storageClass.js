class Storage {

  saveData = (data, key) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  loadData = (key, defaultValue = {}) => {
    const data = window.localStorage.getItem(key);

    return (data) ? JSON.parse(data) : defaultValue;
  }
}
export default Storage;
