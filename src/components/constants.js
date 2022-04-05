export const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-8/",
  headers: {
    "Content-type": "application/json",
    "authorization": "5e31384e-8340-4b11-9222-b8b7f169fb3e"
  },
}

export const user = {
  id: '',
  name: '',
  about: ''
}

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
export const avatar = document.querySelector('.profile__image');
export const profileTitleInput = profileEditForm.elements.profile__title;
export const profileSubtitleInput = profileEditForm.elements.profile__subtitle;
export const profileAvatar = document.querySelector('.profile__image');
export const editAvatarPopup = document.querySelector('#avatarEdit');
export const updateAvatarForm = document.forms['avatar-edit-form']
export const updateAvatarLink = updateAvatarForm.elements.avatar__href;
export const updateAvatarSubmit = updateAvatarForm.elements.form__submit;

