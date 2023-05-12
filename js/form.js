const form = document.querySelector('#my-form');
const input = form.querySelector('input[required]');
const errorContainer = input.nextElementSibling;

// Add function to show/hide error message
function ShowError(event) {
  if (event.target.value === '') {
    errorContainer.classList.remove('show');
  } else {
    errorContainer.classList.add('show');
  }
}

// Add input event listener to show/hide error message
input.addEventListener('input', ShowError);

form.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = form.querySelector('#email');
  const emailValue = emailInput.value;
  const emailRegex = /\S+@\S+\.\S+/; // Regular expression to match email format

  // Remove input event listener
  input.removeEventListener('input', ShowError);

  if (emailValue.match(emailRegex)) {
    // Email format is valid, submit the form
    form.submit();
  } else {
    errorContainer.classList.remove('show');
    // Email format is not valid, display an error message
    const error = document.createElement('p');
    error.textContent = 'Please enter a valid email address';
    error.style.color = 'red';
    form.appendChild(error);
  }
});
