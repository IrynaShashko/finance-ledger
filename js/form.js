const form = document.getElementById('my-form');
const submitButton = form.querySelector('button[type="submit"]');
const input = form.querySelector('input[required]');
const modal = document.getElementById('modal');

// Perform validation
const emailInput = form.querySelector('#email');
const errorContainer = emailInput.nextElementSibling;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const data = { name, email };
  console.log('data', data);

  if (errorContainer) {
    // використовуйте errorContainer
    if (!emailInput.validity.valid) {
      errorContainer.classList.remove('show');
      return;
    }
  } else {
    // робіть щось інше, якщо немає наступного елемента
    return;
  }

  // submit the form
  form.submit();
  modal.classList.remove('hidden');
  modal.classList.add('show');
});

if (email === '') {
  console.log(email);
}

input.addEventListener('input', function (event) {
  if (event.target.value.trim() === '') {
    errorContainer.classList.remove('show');
  } else {
    errorContainer.classList.add('show');
  }
});
