const modal = document.getElementById('modal');

modal.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    modal.classList.remove('show-modal');
    modal.classList.add('hidden');
  }
});
