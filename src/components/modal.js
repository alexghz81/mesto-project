import {profileSubtitle, profileTitle, profileTitleInput, profileSubtitleInput} from "./constants";
import {updateProfile} from "./api";

function handleEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function handleOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc)
  document.addEventListener('click', handleOverlay);
}

export function closePopup() {
  const popupActive = document.querySelector('.popup_opened');
  if (popupActive) {
    popupActive.classList.remove('popup_opened');
  }
  document.removeEventListener('click', handleOverlay);
  document.removeEventListener('keydown', handleEsc);
}

export function submitProfileEdit(evt) {
  evt.preventDefault();
  const profileData = {
    name: profileTitleInput.value,
    about: profileSubtitleInput.value
  };
  updateProfile(profileData)
    .then(() => {
      profileTitle.textContent = profileData.name;
      profileSubtitle.textContent = profileData.about;
    })
    .catch(err => console.log(err));
  closePopup();
}

