// В файле html в тэге body есть один элемент div с классом root.

// Используя JS (DOM), создать карточку товара, которая должна включать в себя следующие данные: Артикул, наименование, цена, фотография товара, 
// почта (почта должна быть кликабельна, перебрасывает на приложение для работы с почтовыми адресами). Данные можно взять произвольные.

//Применить стили к карточке: width, background-color, border, border-radius, padding, margin. 


const rootElem = document.querySelector('.root');


const cardElem = document.createElement('div');
const idElem = document.createElement('p');
const titleElem = document.createElement('p');
const priceElem = document.createElement('p');
const photoElem = document.createElement('img');
const emailElem = document.createElement('a');


idElem.innerText = 'ID: 1';
titleElem.innerText = 'Title: iPhone 13 Pro Max';
priceElem.innerText = 'Price: 1.299$';
emailElem.innerText = 'contactus.de@euro.apple.com';


cardElem.classList.add('card');
photoElem.classList.add('photo');


emailElem.setAttribute('href', 'mailto:contactus.de@euro.apple.com');
photoElem.setAttribute('src', 'img/iphone.png');
photoElem.setAttribute('alt', 'photo');



cardElem.append(idElem, titleElem, priceElem,  emailElem, photoElem);

rootElem.append(cardElem);