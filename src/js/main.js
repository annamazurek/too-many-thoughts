const loadData = document.querySelector('.button__load--js');
const saveData = document.querySelector('.button__save--js');
const textarea = document.querySelector('.form__textarea--js');

saveData.addEventListener('click', (e) => {
  localStorage.setItem('textarea', textarea.value);
});
loadData.addEventListener('click', (e) => {
  textarea.value = localStorage.getItem('textarea');
});

