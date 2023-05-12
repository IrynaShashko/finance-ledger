const modal = document.getElementById('modal');

modal.addEventListener('click', function (event) {
  window.location.href = '/';
  if (event.target.tagName === 'BUTTON') {
    modal.classList.remove('show-modal');
    modal.classList.add('hidden');
  }
});
