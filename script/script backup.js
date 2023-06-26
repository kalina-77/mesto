// Задаем константы и переменные

const editProfileButtonElement = document.querySelector('.profile__edit-button');
const closeProfileButtonElement = document.querySelector('.popup__close-button');
const addPhotoButtonElement = document.querySelector('.profile__add-button');
const closePhotoButtonElement = document.querySelector('.popup__close-button_photo');
const popupElement = document.querySelector('.popup');
const popupPhotoAddElement = document.querySelector('.popup_add-photo');
const likePhotoElement = document.querySelectorAll('.elements__like');
let userName = document.querySelector('.profile__name');
let userDesc = document.querySelector('.profile__desc');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descInput = document.querySelector('.popup__input_type_desc');
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
// Функция открытия-закрытия окон редактирования профиля и добавления фото

function handleClick(e) {
  //  Открытие окна добавления фото

  if (e.currentTarget === addPhotoButtonElement) {
    popupPhotoAddElement.classList.toggle('popup_opened');
  }

  // Закрытие окна добавления фото

  if (e.currentTarget === closePhotoButtonElement) {
    popupPhotoAddElement.classList.toggle('popup_opened');
  }

  // Открытие окна редактирования профиля и подстановка значений в форму

  // if (e.target === e.currentTarget) {
  //   popupElement.classList.toggle('popup_opened');
  // }
  if (e.currentTarget === editProfileButtonElement) {
    popupElement.classList.toggle('popup_opened');
    nameInput.value = userName.textContent;
    descInput.value = userDesc.textContent;
  }

  // Закрытие окна редактирования профиля

  if (e.currentTarget === closeProfileButtonElement) {
    popupElement.classList.toggle('popup_opened');
  }
}

// Функция отмены отправки формы профиля пользователя, так как нет сервера

function handleFormSubmit(evt) {
  evt.preventDefault();

  // Вставляем новые текстовые данные из формы профиля пользователя в переменные

  userName.textContent = nameInput.value;
  userDesc.textContent = descInput.value;

  // Закрываем окно редактирования профиля пользователя

  popupElement.classList.toggle('popup_opened');
}

// Функция/обработчик like/unlike

document.querySelectorAll('.elements__like').forEach(likePhotoElement => {
  likePhotoElement.addEventListener('click', () => {
    likePhotoElement.classList.toggle('elements__like_active');
  });
});

// Функция добавления фото

// Функция удаления фото

// Обработчик открытия/закрытия окна редактирования профиля (вызов функции)

editProfileButtonElement.addEventListener('click', handleClick);
closeProfileButtonElement.addEventListener('click', handleClick);
popupElement.addEventListener('click', handleClick);

// Обработчик формы профиля пользователя (вызов функции)

formElement.addEventListener('submit', handleFormSubmit);

// Обработчик открытия/закрытия окна добавления фото (вызов функции)

addPhotoButtonElement.addEventListener('click', handleClick);
closePhotoButtonElement.addEventListener('click', handleClick);
