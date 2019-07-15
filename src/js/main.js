"use strict";

import moment from 'moment';

console.log(moment().format('MM DD YYYY, h:mm:ss a'));

const loadData = document.querySelector('.button__load--js');
const saveData = document.querySelector('.button__save--js');
const textarea = document.querySelector('.textarea--js');
const hidePrompt = document.querySelector('.prompt');
const showQuestions = document.querySelector('.form__questions');


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
  showQuestions.classList.toggle('form__questions--show');
});

/*
buttonLoad.addEventListener('keyup', (e) =>
  localstorage.getItem('')...
)


//NAUKA ARRAY METHODS
const mySkills = ['html', 'css', 'js', 'git', 'gulp', 'figma'];

// DODAWANIE I USUWANIE ELEMENTÓW Z TABLICY
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



// zwracanie nowej tablicy stanowiącej wycinek 
// arr.slice(begin, end) - domyślne parametry: (0, arr.lenght)
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray.slice(5)); //-> [6, 7, 8, 9]
console.log(myArray.slice(3, 8)); //-> [4, 5, 6, 7, 8] - nie bierze pod uwagę ostatniego elementu
console.log(myArray.slice(3, myArray.length)); //-> [4, 5, 6, 7, 8, 9]

//mutacja pierwotnej tablicy
//arr.splice(begin, deleteCount)/(początek, liczba usuniętych elementów) - domyślne parametry: (0, *, item, ...)
myArray.splice(5); //-> [1, 2, 3, 4, 5]
console.log(myArray);
myArray.splice(0, 1); //-> [2, 3, 4, 5]
console.log(myArray);
// myArray.splice(myArray); //->[]
//myArray.splice(2, 2, 'r'); //-> [2,3,"r"]
myArray.splice(2, 2, ['a','n','i','a']); //-> [2,3, ['a','n','i','a']]/[2,3,Array(4)] 
//SPŁASZCZENIE TABLICY:
myArray.splice(2, 2, ...['a','n','i','a']); //-> [2,3, 'a','n','i','a']
console.log(myArray);


//METODA forEach - wykonuje pewną czynność dla danego elementu naszej tablicy (przechodzi przez każdy element krok po kroku) - a co ta metoda zrobi opisujemy sami (przyjmuje argument w postaci funkcji, która z kolei ma argumenty currentValue - element, po którym obecnie iterujemy; index - nie jest obowiązkowy, możemy go ominąć)
//arr.forEach(function callback(currentValue, index) {
//  //function body  
//});
newArray = [1,2,3,4,5,6,7,8,9,0];
newArray.forEach((element, i) => {
  console.log(`${element} is at ${i} index`);
}); 
console.log(newArray);
//-> 2 is at 0 index
//  3 is at 1 index
//  a is at 2 index
//  n is at 3 index
//  i is at 4 index
//  a is at 5 index

const list = document.querySelector('#list'); //pobieramy id z <ul>
newArray.forEach((item) => {
  const li = document.createElement('li');

  li.innerHTML = item;
  list.appendChild(li);
});

const listElements = document.querySelectorAll('li');

// listElements.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     e.target.classList.toggle('list-item');
//   })
// }); //kliknięte elementy zmieniają wygląd

listElements.forEach((element) => {
  element.addEventListener('click', (e) => {
    listElements.forEach(element => {
      element.classList.remove('list-item');
    });
    e.target.classList.add('list-item');
  })
}); //kliknięcie najpierw usuwa z wszystkich elementów klasę, a następnie dodaje ją tylko klikniętemu elementowi -> wygląd zmienia tylko kliknięty element
*/