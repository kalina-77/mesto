// Задаем константы и переменные

const editProfileButtonElement = document.querySelector('.profile__edit-button');
const closeProfileButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');
const addPhotoButtonElement = document.querySelector('.profile__add-button');
const closePhotoButtonElement = document.querySelector('.popup__close-button_photo');
const photoEditElement = document.querySelector('.popup_add-photo');
let userName = document.querySelector('.profile__name');
let userDesc = document.querySelector('.profile__desc');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descInput = document.querySelector('.popup__input_type_desc');
const cardTemplate = document.querySelector('#card-photo').content;
const photoElement = document.querySelector('.elements');
const submitPhotoElement = document.querySelector('.popup__submit_photo');
const placePhotoInput = document.querySelector('.popup__input_type_place');
const placeNameInput = document.querySelector('.popup__input_type_link');
const likePhotoElement = document.querySelectorAll('.elements__like');

// ПР5

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

// Создание шаблона и добавление 6 карточек при закрузке страницы

initialCards.forEach(place => {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  cardElement.querySelector('.elements__image').src = place.link;
  cardElement.querySelector('.elements__image').alt = place.name;
  cardElement.querySelector('.elements__text').textContent = place.name;
  photoElement.append(cardElement);
});

// Функция открытия-закрытия окна редактирования профиля пользователя

function handleClick(e) {
  if (e.target === e.currentTarget) {
    popupElement.classList.toggle('popup_opened');
  }

  // Подстановка исходных значений в форму

  if (e.currentTarget === editProfileButtonElement) {
    nameInput.value = userName.textContent;
    descInput.value = userDesc.textContent;
  }
}

// Функция изменения данных пользователя

function handleFormSubmit(evt) {
  // Отмена отправки формы на сервер

  evt.preventDefault();

  // Вставляем новые текстовые данные из формы в переменные

  userName.textContent = nameInput.value;
  userDesc.textContent = descInput.value;

  // Закрываем окно

  popupElement.classList.toggle('popup_opened');
}

// Функция открытия/закрытия формы добавления фото

function photoAdd() {
  photoEditElement.classList.toggle('popup_opened');
}

// Функция like/unlike

document.querySelectorAll('.elements__like').forEach(likePhotoElement => {
  likePhotoElement.addEventListener('click', () => {
    likePhotoElement.classList.toggle('elements__like_active');
  });
});

// Функция добавления фото

function submitPhoto(evt) {
  // Отмена отправки формы на сервер

  evt.preventDefault();
}

// Обработчик открытия/закрытия окна редактирования данных пользователя

editProfileButtonElement.addEventListener('click', handleClick);
closeProfileButtonElement.addEventListener('click', handleClick);
popupElement.addEventListener('click', handleClick);

// Обработчик формы изменения данных пользователя

formElement.addEventListener('submit', handleFormSubmit);

// Обработчик открытия/закрытия окна добавления фото

addPhotoButtonElement.addEventListener('click', photoAdd);
closePhotoButtonElement.addEventListener('click', photoAdd);

// Обработчик добавления фото

submitPhotoElement.addEventListener('click', submitPhoto);
