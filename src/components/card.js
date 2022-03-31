import {card, cardTemplate, imageScale, popupImage, popupImageTitle, user} from "./constants";
import {openPopup} from "./modal";
import {addLike, deleteCard, deleteLike, getCards} from "./api";

const openImagePopup = (data) => {
  popupImage.src = data.link;
  popupImage.alt = data.name;
  popupImageTitle.textContent = data.name;
  openPopup(imageScale);
}

function isLiked(cardId, likesList) {
  const likesArray = likesList.map((el) => el._id)
  return !!likesArray.some(el => el === user.id);
}

function createCard(data) {
  const cardsElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardsElement.querySelector('.element__image');
  const cardTitle = cardsElement.querySelector('.element__title');
  const cardLikes = cardsElement.querySelector('.element__like-number');
  const cardLikeBtn = cardsElement.querySelector('.element__like');
  const cardDeleteBtn = cardsElement.querySelector('.element__delete');
  if (isLiked(data._id, data.likes)) {
    cardLikeBtn.classList.add('element__like_active');
  }
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardLikes.textContent = data.likes.length;
  cardLikeBtn.addEventListener('click', evt => {
    clickLike(evt, data)
  });
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

export const addCardItem = (data, cardsList) => {
  const cardsElement = createCard(data, cardsList);
  card.prepend(cardsElement);
}

function clickLike(evt, data) {
  getCards()
    .then((res) => {
      return res.find(item => item._id === data._id).likes
    })
    .then(likeList => {
      if (isLiked(data._id, likeList)) {
        deleteLike(data)
          .then(res => {
            evt.target.classList.remove('element__like_active');
            evt.target.parentNode.querySelector('.element__like-number').textContent = res.likes.length;
          })
          .catch(err => console.log(err));
      } else {
        addLike(data)
          .then(res => {
            evt.target.classList.add('element__like_active');
            evt.target.parentNode.querySelector('.element__like-number').textContent = res.likes.length;
          })
          .catch(err => console.log(err));
      }
    })
}

function deleteElement(evt, data) {
  const item = evt.target.closest('.element');
  deleteCard(data)
    .then(() => {
      item.remove();
    })
    .catch(err => console.log(err))
}
