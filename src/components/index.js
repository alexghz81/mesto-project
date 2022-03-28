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
  profileEditForm, profileTitle, profileSubtitle, avatar, profileTitleInput, profileSubtitleInput, user
} from './constants';
import {enableValidation} from './validate';
import {openPopup, closePopup, submitProfileEdit} from './modal';
import {addCardItem} from "./card";
import {addCard, getUserInfo} from "./api";

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
  addCard(data)
    .then((data) => {
      addCardItem(data);
      console.log('item added');
      closePopup();
      evt.target.reset();
      const submitButton = evt.submitter;
      submitButton.classList.add(validationParameters.inactiveButtonClass);
      submitButton.disabled = true;
    })
    .catch(err => console.log(err))
});

popupCloseButtons.forEach(item => item.addEventListener('click', closePopup));

enableValidation(validationParameters);

getUserInfo()
  .then(res => {
    profileTitle.textContent = res.name;
    profileSubtitle.textContent = res.about;
    avatar.src = res.avatar;
    profileTitleInput.value = res.name;
    profileSubtitleInput.value = res.about;
    user.id = res._id.toString();
  })
  .catch(err => console.log(err));


