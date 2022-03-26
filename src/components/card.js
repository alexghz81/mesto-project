import {card, cardTemplate, imageScale, initialCards} from "./constants";
import {openPopup} from "./modal";

const imagePopupHandler = (data) => {
  imageScale.querySelector('.popup__image').src = data.link;
  imageScale.querySelector('.popup__image').alt = data.name;
  imageScale.querySelector('.popup__image-title').textContent = data.name;
  openPopup(imageScale);
}

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

export const addCardItem = (data) => {
  const cardsElement = createCard(data)
  card.prepend(cardsElement);
}

for (let i = 0; i < initialCards.length; i++) {
  addCardItem(initialCards[i]);
}

function clickLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function deleteElement(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}