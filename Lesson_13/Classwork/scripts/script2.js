// const body = document.body;
const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const idElem = document.createElement('p');
const firstNameElem = document.createElement('p');
const lastNameElem = document.createElement('p');
const emailElem = document.createElement('a');
const imgElem = document.createElement('img');

idElem.innerText = 'ID: 1';
firstNameElem.innerText = 'First name: Michael';
lastNameElem.innerText = 'Last name: Lawson';
emailElem.innerText = 'michael.lawson@reqres.in';

card.classList.add('card');
imgElem.classList.add('photo');

emailElem.setAttribute('href', 'mailto:michael.lawson@reqres.in');
imgElem.setAttribute('src', 'https://reqres.in/img/faces/7-image.jpg');
imgElem.setAttribute('alt', 'photo');


card.append(idElem, firstNameElem, lastNameElem, emailElem, imgElem);
// body.append(firstNameElem);
rootElem.append(card);

