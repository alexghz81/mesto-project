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
  editAvatarPopup, updateAvatarForm, updateAvatarLink,
} from './constants';
import {enableValidation} from './validate';
import {openPopup, closePopup, submitProfileEdit} from './modal';
import {addCardItem} from "./card";
import {addCard, getCards, getUserInfo, updateAvatar} from "./api";

profileEditBtn.addEventListener('click', () => {
  openPopup(profileEditPopup);
});
profileEditForm.addEventListener('submit', submitProfileEdit);

addMestoBtn.addEventListener('click', () => openPopup(addMestoPopup));
profileAvatar.addEventListener('click', () => openPopup(editAvatarPopup));

updateAvatarForm.addEventListener('submit', evt =>{
  evt.preventDefault();
  const data ={};
  data.avatar = updateAvatarLink.value;
  updateAvatar(data)
    .then(res => profileAvatar.src = res.avatar)
    .then(closePopup())
    .catch(err => console.log(err));
})

addMestoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
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
    updateAvatarLink.value = res.avatar;
  })
  .catch(err => console.log(err));

export let cardsList =[];

Promise.all([getCards()])
  .then( res => {
    cardsList = res[0];
    return cardsList;
  }).then(cardsList => {
    cardsList.forEach(element => {
    addCardItem(element, cardsList);
    return cardsList;
    })})
  .catch(err => console.log(err));




