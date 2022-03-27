import {card, cardTemplate, imageScale, initialCards, popupImage, popupImageTitle} from "./constants";
import {openPopup} from "./modal";



const openImagePopup = (data) => {
  popupImage.src = data.link;
  popupImage.alt = data.name;
  popupImageTitle.textContent = data.name;
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
  cardImage.addEventListener('click', () => openImagePopup(data));
  return cardsElement;
}

export const addCardItem = (data) => {
  const cardsElement = createCard(data)
  card.prepend(cardsElement);
}

initialCards.forEach(element => {
  addCardItem(element);
});


function clickLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function deleteElement(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}