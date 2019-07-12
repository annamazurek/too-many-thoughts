"use strict";

import moment from 'moment';

console.log(moment().format('MM DD YYYY, h:mm:ss a'));

const loadData = document.querySelector('.button__load--js');
const saveData = document.querySelector('.button__save--js');
const textarea = document.querySelector('.textarea--js');
const hidePrompt = document.querySelector('.prompt');
const showQuestions = document.querySelector('.textarea__questions');


saveData.addEventListener('click', (e) => {
  localStorage.setItem('textarea', textarea.value);
});
loadData.addEventListener('click', (e) => {
  textarea.value = localStorage.getItem('textarea');
});

saveData.addEventListener('mouseover', (e) => {
  hidePrompt.classList.add('prompt--hidden');
});
textarea.addEventListener('mouseover', (e) => {
  showQuestions.classList.toggle('textarea__questions--show');
});

/*
buttonLoad.addEventListener('keyup', (e) =>
  localstorage.getItem('')...
)


//NAUKA ARRAY METHODS
const mySkills = ['html', 'css', 'js', 'git', 'gulp', 'figma'];

// dodawanie i usuwanie elementów z tablicy
// pop / push - mutują naszą tablicę
// usunięcie ostatniego elementu:
mySkills.pop();
console.log(mySkills);
// dodanie ostatniego elementu:
mySkills.push('BEM');
console.log(mySkills);
// shift / unshift
// j/w, ale dotyczą pierwszego elementu:
mySkills.shift();
console.log(mySkills);
mySkills.unshift('html5');
console.log(mySkills);

// ŁĄCZENIE TABLIC
// pobranie diva o id 'box' i stworzenie elementu <p></p>
const box = document.querySelector('.main');
const div = document.createElement('p');
// 2 tablice, np. ściągnięte z 2 różnych serwerów:
const music = ['jazz', 'rock'];
const music2 = ['blues', 'pop'];
// połączenie tablic - [].concat() - i dodanie jeszcze kilku elementów:
const allMusic = [].concat(music, music2, ['metal', 'indie']);
// dodanie przecinka i spacji między elementami tablicy - metoda join():
div.innerHTML = allMusic.join(', ');
//dodanie stworzonego tagu jako dziecko naszego boxa:
box.appendChild(div);
*/