// 1. Открытие/закрытие окна и редактирования профиля пользователя

// Задаем константы и переменные

const editProfileButtonElement = document.querySelector('.profile__edit-button');
const closeProfileButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userDesc = document.querySelector('.profile__desc');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let descInput = document.querySelector('.popup__input_type_desc');

// Функция открытия-закрытия окна

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

// Функция отмены отправки формы, так как нет сервера

function handleFormSubmit(evt) {
  evt.preventDefault();

  // Вставляем новые текстовые данные из формы в переменные

  userName.textContent = nameInput.value;
  userDesc.textContent = descInput.value;

  // Закрываем окно

  popupElement.classList.toggle('popup_opened');
}

// Обработчик формы (вызов функции)

formElement.addEventListener('submit', handleFormSubmit);

// Обработчик открытия/закрытия окна (вызов функции)

editProfileButtonElement.addEventListener('click', handleClick);
closeProfileButtonElement.addEventListener('click', handleClick);
popupElement.addEventListener('click', handleClick);
