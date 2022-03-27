export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationParameters = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_valid_error',
  errorClass: 'form__error_visible'
};

export const popupCloseButtons = document.querySelectorAll('.popup__close-btn');
export const profileEditPopup = document.querySelector('#profileEdit');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileEditBtn = document.querySelector('.profile__edit');
export const addMestoPopup = document.querySelector('#addMesto');
export const addMestoBtn = document.querySelector('.profile__add-button');
export const profileEditForm = document.forms['profile-edit-form'];
export const addMestoForm = document.forms['add-mesto-form'];
export const addMestoTitle = addMestoForm.elements.mesto__title;
export const addMestoLink = addMestoForm.elements.mesto__href;
export const imageScale = document.querySelector('#image-popup');
export const popupImage = imageScale.querySelector('.popup__image');
export const popupImageTitle = imageScale.querySelector('.popup__image-title');
export const cardTemplate = document.querySelector('#card').content;
export const card = document.querySelector('.elements');
