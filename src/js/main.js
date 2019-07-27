"use strict";

import moment from 'moment';

console.log(moment().format('MM DD YYYY, h:mm:ss a'));

const loadData = document.querySelector('.button__load--js');
const saveData = document.querySelector('.button__save--js');
const textarea = document.querySelector('.textarea--js');
const hidePrompt = document.querySelector('.prompt');
const form = document.querySelector('.form');
const showQuestions = document.querySelector('.form__questions');


saveData.addEventListener('click', (e) => {
  e.preventDefault(); //usuwa domyślne zachowanie przeglądarki - wciśnięcie przycisku nie powoduje teraz przeładowania strony
  localStorage.setItem('textarea', textarea.value);
});
loadData.addEventListener('click', (e) => {
  e.preventDefault(); 
  textarea.value = localStorage.getItem('textarea');
});

saveData.addEventListener('mouseover', (e) => {
  hidePrompt.classList.add('prompt--hidden');
});

form.addEventListener('mouseover', (e) => {
  showQuestions.classList.add('form__questions--show');
});

form.addEventListener('mouseout', (e) => {
  showQuestions.classList.remove('form__questions--show');
});
