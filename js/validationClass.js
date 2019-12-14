class Validation {
  constructor() {

  }

  getAllStickersInputs = () => {
    const stickersInput = document.querySelectorAll('.sticker__input');

    console.log(stickersInput);
  }
}

const Validator = new Validation();
Validator.getAllStickersInputs();