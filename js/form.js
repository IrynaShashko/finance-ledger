const form = document.querySelector('#my-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData,
  })
    .then(() => console.log('Form successfully submitted'))
    .catch(error => alert(error));

  // Очистити форму після відправки
  form.reset();
});

// const form = document.querySelector('#my-form');
// const submitButton = form.querySelector('button[type="submit"]');
// const input = form.querySelector('input[required]');
// const modal = document.getElementById('modal');

// const emailInput = form.querySelector('#email');
// const errorContainer = emailInput.nextElementSibling;

// const handleSubmit = event => {
//   event.preventDefault();

//   const myForm = event.target;
//   const formData = new FormData(myForm);

//   fetch('/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log('Form successfully submitted'))
//     .catch(error => alert(error));
// };

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const myForm = event.target;
//   console.log('myForm', myForm);
//   const formDataN = new FormData(myForm);
//   console.log('formDataN', formDataN);
//   const formData = new FormData(form);
//   console.log('formData', formData);
//   const name = formData.get('name');
//   const email = formData.get('email');
//   const data = { name, email };
//   console.log('data', data);

//   fetch('/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: new URLSearchParams(formDataN).toString(),
//   })
//     .then(() => console.log('Form successfully submitted'))
//     .catch(error => alert(error));

//   if (errorContainer) {
//     if (!emailInput.validity.valid) {
//       errorContainer.classList.remove('show');
//       return;
//     }
//   } else {
//     return;
//   }

//   // modal.classList.remove('hidden');
//   // modal.classList.add('show-modal');
//   form.reset();
// });

// if (email === '') {
//   console.log(email);
// }

// input.addEventListener('input', function (event) {
//   if (event.target.value.trim() === '') {
//     errorContainer.classList.remove('show');
//   } else {
//     errorContainer.classList.add('show');
//   }
// });
