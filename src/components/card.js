import {card, cardTemplate, imageScale, popupImage, popupImageTitle, user} from "./constants";
import {openPopup} from "./modal";
import {deleteCard, getCards} from "./api";


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
  const cardLikes = cardsElement.querySelector('.element__like-number');
  const cardDeleteBtn = cardsElement.querySelector('.element__delete');
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardLikes.textContent = data.likes.length;
  cardsElement.querySelector('.element__like').addEventListener('click', clickLike);
  if (data.owner._id !== user.id) {
    cardDeleteBtn.classList.add('element__delete_hidden');
  } else {
    cardDeleteBtn.addEventListener('click', (evt) => {
      deleteElement(evt, data)
    });
  }
  cardImage.addEventListener('click', () => openImagePopup(data));
  return cardsElement;
}

export const addCardItem = (data) => {
  const cardsElement = createCard(data);
  card.prepend(cardsElement);
}

getCards()
  .then(res => {
    res.forEach(element => {
      addCardItem(element);
    });
  })

function clickLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function deleteElement(evt, data) {
  const item = evt.target.closest('.element');
  deleteCard(data)
    .then(() => {
      item.remove();
    })
    .catch(err => console.log(err))
}