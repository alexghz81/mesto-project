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
  profileEditForm,
  profileTitle,
  profileSubtitle,
  avatar,
  profileTitleInput,
  profileSubtitleInput,
  user,
  profileAvatar,
  editAvatarPopup, updateAvatarForm, updateAvatarLink, updateAvatarSubmit
} from './constants';
import {enableValidation} from './validate';
import {openPopup, closePopup, submitProfileEdit} from './modal';
import {addCardItem} from "./card";
import {addCard, getCards, getUserInfo, updateAvatar} from "./api";

profileEditBtn.addEventListener('click', () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;
  profileEditForm.elements.form__submit.disabled = false;
  profileEditForm.elements.form__submit.classList.remove(validationParameters.inactiveButtonClass);
  Array.from(profileEditForm.querySelectorAll('.form__error')).forEach(el => el.textContent = '');
  profileEditForm.elements.profile__title.classList.remove(validationParameters.inputErrorClass);
  profileEditForm.elements.profile__subtitle.classList.remove(validationParameters.inputErrorClass);
  openPopup(profileEditPopup);
});

profileEditForm.addEventListener('submit', submitProfileEdit);

addMestoBtn.addEventListener('click', () => openPopup(addMestoPopup));
profileAvatar.addEventListener('click', () => {
  updateAvatarForm.querySelector('.form__error').textContent = '';
  updateAvatarSubmit.disabled = false;
  updateAvatarSubmit.classList.remove(validationParameters.inactiveButtonClass);
  updateAvatarLink.classList.remove(validationParameters.inputErrorClass);
  updateAvatarLink.value = avatar.src;
  console.log(updateAvatarLink.textContent)
  openPopup(editAvatarPopup)
});

updateAvatarForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const buttonText = evt.submitter.textContent;
  loading(true, buttonText, evt);
  const data = {};
  data.avatar = updateAvatarLink.value;
  updateAvatar(data)
    .then(res => profileAvatar.src = res.avatar)
    .then(() => closePopup())
    .catch(err => console.log(err))
    .finally(() => loading(false, buttonText, evt))
})

addMestoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const buttonText = evt.submitter.textContent;
  loading(true, buttonText, evt);
  const data = {};
  data.name = addMestoTitle.value;
  data.link = addMestoLink.value;
  addCard(data)
    .then((data) => {
      addCardItem(data);
      closePopup();
      evt.target.reset();
      const submitButton = evt.submitter;
      submitButton.classList.add(validationParameters.inactiveButtonClass);
      submitButton.disabled = true;
    })
    .catch(err => console.log(err))
    .finally(() => loading(false, buttonText, evt))
});

popupCloseButtons.forEach(item => item.addEventListener('click', closePopup));

export function loading(isLoading, buttonText, evt) {
  const submitButton = evt.submitter;
  if (isLoading) {
    submitButton.textContent = 'Сохранение...'
  } else {
    submitButton.textContent = buttonText;
  }
}

enableValidation(validationParameters);

Promise.all([getUserInfo(), getCards()])
  .then(([userData, cards]) => {
    profileTitle.textContent = userData.name;
    profileSubtitle.textContent = userData.about;
    avatar.src = userData.avatar;
    console.log(avatar.src);
    user.name = userData.name;
    user.about = userData.about;
    user.id = userData._id.toString();
    cards.forEach(element => {
      addCardItem(element, cards);
    })
    return userData;
  })
  .catch(err => console.log(err));




