// Создать форму, с двумя инпутами (имя и возраст)
// При отправке формы собрать данные из инпутов
// Сформировать под формой параграф в формате 'Hello ИМЯ. Your age is ВОЗРАСТ'
// Каждый раз после отправки формы очищать инпут

const rootElem = document.querySelector('#root');
const form = document.querySelector('.form');

form.addEventListener("submit", (event) => {
    
  event.preventDefault();
  rootElem.innerText = "";

  const fullName = event.target.full_name.value;
  const age = event.target.age.value;

  const inputText = document.createElement("p");

  inputText.innerText = `Hello ${fullName}. Your age is ${age}.`;

  rootElem.append(inputText);

  event.target.full_name.value = "";
  event.target.age.value = "";

});