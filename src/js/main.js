const loadData = document.querySelector('.button__load--js');
const saveData = document.querySelector('.button__save--js');
const textarea = document.querySelector('.form__textarea--js');
// const saveInfo = document.querySelector

saveData.addEventListener('click', (e) => {
  localStorage.setItem('textarea', textarea.value);
  document.body.classList.add('button__save--showInfo');
  window.setTimeout(() => document.body.classList.remove('button__save--showInfo'), 4900
    );
});

loadData.addEventListener('click', (e) => {
  textarea.value = localStorage.getItem('textarea');
});

