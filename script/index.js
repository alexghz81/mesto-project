const profileEditPopup = document.querySelector('#profileEdit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');
const profileEditBtn = document.querySelector('.profile__edit');
const profileEditForm = document.forms['profile-edit-form'];
const profileTitleInput = profileEditForm.elements.profile__title;
const profileSubtitleInput = profileEditForm.elements.profile__subtitle;
const addMestoPopup = document.querySelector('#addMesto');
const addMestoBtn = document.querySelector('.profile__add-button');


const initialCards = [
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


function openPopup (popup){
    popup.classList.add('popup_opened');
}

function closePopup() {
    const popupActive = document.querySelector('.popup.popup_opened');
    popupActive.classList.remove('popup_opened');
}

function submitProfileEdit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopup();
}

profileEditBtn.addEventListener('click', () => {openPopup(profileEditPopup)});
profileEditForm.addEventListener('submit', submitProfileEdit);
addMestoBtn.addEventListener('click', () => {openPopup(addMestoPopup)});
popupCloseBtn.forEach(item => item.addEventListener('click', closePopup));