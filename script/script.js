// 1. Открытие/закрытие окна редактирования профиля пользователя

// Задаем константы

const editProfileButtonElement = document.querySelector('.profile__edit-button');
const closeProfileButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

// Сама функция открытия-закрытия окна

function handleClick(e) {
  if (e.target === e.currentTarget) {
    popupElement.classList.toggle('popup_opened');
  }
}

// Слушаем click на элементах

editProfileButtonElement.addEventListener('click', handleClick);
closeProfileButtonElement.addEventListener('click', handleClick);
popupElement.addEventListener('click', handleClick);

// Конец 1.

// 2. Редактрирование профиля пользователя

// Задаем переменные
let userName = document.querySelector('.profile__name');
let userDesc = document.querySelector('.profile__desc');

// Подставляем исходные значения в форму

document.getElementById('name-input').value = userName.textContent;
document.getElementById('desc-input').value = userDesc.textContent;

// Задаем переменные формы и полей формы

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let descInput = document.querySelector('.popup__input_desc');

// Функция отмены отправки формы

function handleFormSubmit(evt) {
  evt.preventDefault();

  // Вставляем новые значения

  userName.textContent = nameInput.value;
  userDesc.textContent = descInput.value;

  // Закрываем окно

  popupElement.classList.toggle('popup_opened');
}
// Обработчик формы (вызов функции обработки формы)

formElement.addEventListener('submit', handleFormSubmit);

// Конец 2.
