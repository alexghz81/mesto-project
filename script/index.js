//Popup
const popupCloseButtons = document.querySelectorAll('.popup__close-btn');

//Profile popup
const profileEditPopup = document.querySelector('#profileEdit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditBtn = document.querySelector('.profile__edit');
const profileEditForm = document.forms['profile-edit-form'];
const profileTitleInput = profileEditForm.elements.profile__title;
const profileSubtitleInput = profileEditForm.elements.profile__subtitle;

//Mesto popup
const addMestoPopup = document.querySelector('#addMesto');
const addMestoBtn = document.querySelector('.profile__add-button');
const addMestoForm = document.forms['add-mesto-form'];
const addMestoTitle = addMestoForm.elements.mesto__title;
const addMestoLink = addMestoForm.elements.mesto__href;

//Cards template
const cardTemplate = document.querySelector('#card').content;
const card = document.querySelector('.elements');

//Image Scale popup
const imageScale = document.querySelector('#image-popup');

function createCard(data) {
    const cardsElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardsElement.querySelector('.element__image');
    const cardTitle = cardsElement.querySelector('.element__title');
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
    cardsElement.querySelector('.element__like').addEventListener('click', clickLike);
    cardsElement.querySelector('.element__delete').addEventListener('click', deleteElement);
    cardImage.addEventListener('click', () => imagePopupHandler(data));
    return cardsElement;
}

const addCardItem = (data) => {
    const cardsElement = createCard(data)
    card.prepend(cardsElement);
}

for (let i = 0; i < initialCards.length; i++) {
    addCardItem(initialCards[i]);
}

imagePopupHandler = (data) => {
    imageScale.querySelector('.popup__image').src = data.link;
    imageScale.querySelector('.popup__image').alt = data.name;
    imageScale.querySelector('.popup__image-title').textContent = data.name;
    openPopup(imageScale);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup() {
    const popupActive = document.querySelector('.popup_opened');
    if (popupActive) {
        popupActive.classList.remove('popup_opened');
    }
}

function submitProfileEdit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopup();
}

function clickLike(evt) {
    evt.target.classList.toggle('element__like_active');
}

function deleteElement(evt) {
    const item = evt.target.closest('.element');
    item.remove();
}

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
});
popupCloseButtons.forEach(item => item.addEventListener('click', closePopup));
