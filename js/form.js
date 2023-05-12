const form = document.querySelector('#my-form');
// const submitButton = form.querySelector('button[type="submit"]');
const input = form.querySelector('input[required]');

// const emailInput = form.querySelector('#email');
const errorContainer = emailInput.nextElementSibling;

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   if (errorContainer) {
//     if (!emailInput.validity.valid) {
//       errorContainer.classList.remove('show');
//       return;
//     }
//   } else {
//     return;
//   }

//   //   form.reset();
// });

input.addEventListener('input', function (event) {
  if (event.target.value.trim() === '') {
    errorContainer.classList.remove('show');
  } else {
    errorContainer.classList.add('show');
  }
});
