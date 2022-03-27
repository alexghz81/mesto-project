import {profileSubtitle, profileTitle, profileEditForm} from "./constants";

const profileTitleInput = profileEditForm.elements.profile__title;
const profileSubtitleInput = profileEditForm.elements.profile__subtitle;

function handleEsc(evt) {
  if (evt.key.toLowerCase() === 'escape') {
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
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup();
}
