const rootElem = document.querySelector('.root');
const pElem = document.querySelector('.p');
const btnElem = document.querySelector('button');
const hElem = document.querySelector('#greeting');
const hhElem = document.getElementById('greeting2');

// console.log(rootElem);
// console.log(pElem);
// console.log(btnElem);
// console.log(hElem);
// console.log(hhElem);

pElem.style.color = 'red';
hElem.style.backgroundColor = 'yellow';
btnElem.style.backgroundColor = 'red';

btnElem.classList.add('btn');
pElem.classList.remove('p2');

const containerElem = document.createElement('div');
const textElem = document.createElement('p');
textElem.innerText = 'Hello!';

const conTextElem = document.createElement('p');
conTextElem.innerText = 'initial text';

containerElem.append(conTextElem);

rootElem.append(textElem, containerElem);

