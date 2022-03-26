import '../pages/index.css';
import {
  popupCloseButtons,
  profileEditBtn,
  profileEditPopup,
  addMestoBtn,
  addMestoPopup,
  validationParameters,
  addMestoForm,
  addMestoTitle,
  addMestoLink,
  profileEditForm
} from './constants';
import {enableValidation} from './validate';
import {openPopup, closePopup, submitProfileEdit} from './modal';
import {addCardItem} from "./card";

profileEditBtn.addEventListener('click', () => {
  openPopup(profileEditPopup);
});
profileEditForm.addEventListener('submit', submitProfileEdit);

addMestoBtn.addEventListener('click', () => {
  openPopup(addMestoPopup);
});

addMestoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = {};
  data.name = addMestoTitle.value;
  data.link = addMestoLink.value;
  addCardItem(data);
  closePopup();
  addMestoTitle.value = '';
  addMestoLink.value = '';
  const submitButton = evt.target.querySelector('.form__button');
  submitButton.classList.add(validationParameters.inactiveButtonClass);
});

popupCloseButtons.forEach(item => item.addEventListener('click', closePopup));

enableValidation(validationParameters);