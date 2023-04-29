// імпортуємо бібліотеку lightbox2
import 'lightbox2';

// налаштування lightbox2
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  alwaysShowNavOnTouchDevices: true,
  fadeDuration: 500,
  disableScrolling: true,
  showImageNumberLabel: false,
  wrapAround: true,
  positionFromTop: 50,
  disableScrolling: true,
  albumLabel: 'Зображення %1 з %2',
  disableScrolling: true,
  showImageNumberLabel: false,
  disableScrolling: true,
  fadeDuration: 500,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true,
});

// відстеження подій на кнопках переключення та закриття
document.addEventListener('click', function (event) {
  // перевірка, щоб перевірити, чи натиснуто на кнопку "назад"
  if (event.target.classList.contains('lb-prev')) {
    // переключення на попереднє зображення
    lightbox.prev();
  }

  // перевірка, щоб перевірити, чи натиснуто на кнопку "вперед"
  if (event.target.classList.contains('lb-next')) {
    // переключення на наступне зображення
    lightbox.next();
  }

  // перевірка, щоб перевірити, чи натиснуто на кнопку "закрити"
  if (event.target.classList.contains('lb-close')) {
    // закриття вікна зображення
    lightbox.close();
  }
});

// // Отримати всі елементи з класом "lightbox"
// const lightboxElements = document.querySelectorAll('.lightbox');
// console.log('lightboxElements', lightboxElements);
// // Додати подію "click" до кожного зображення
// lightboxElements.forEach(img => {
//   console.log('img', img);
//   img.addEventListener('click', function () {
//     console.log('yahoooo');
//     // Створити модальне вікно та зображення
//     const lightbox = document.createElement('div');
//     const lightboxImg = document.createElement('img');
//     const closeButton = document.createElement('span');
//     console.log('lightbox', lightbox);
//     // Додати id для модального вікна та кнопки закриття
//     lightbox.id = 'lightbox';
//     closeButton.id = 'close';

//     console.log('lightbox.id ', lightbox.id);

//     // Додати зображення в модальне вікно та додати модальне вікно до body
//     lightboxImg.src = this.src;
//     lightbox.appendChild(lightboxImg);
//     document.body.appendChild(lightbox);

//     // Додати кнопку закриття до модального вікна
//     closeButton.innerHTML = '&times;';
//     lightbox.appendChild(closeButton);

//     // Додати подію "click" до кнопки закриття
//     closeButton.addEventListener('click', function () {
//       lightbox.remove();
//     });
//   });
// });
