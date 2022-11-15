/* Создать форму, с восемью инпутами (имя, фамилия, возраст, ставка, дни, email, ссылка на фото, прогресс)
При отправке формы собрать данные из инпутов и записать их в пустой массив workers в виде объекта (в формате ключ-значение).
Используя данные из массива workers, сформировать под формой карточку со следующей информацией:
Name: ИМЯ ФАМИЛИЯ
Age: ВОЗРАСТ
Salary: СТАВКА * ДНИ
EMAIL (*кликабельный)
ФОТО (*отображается фото)
ЛИНИЯ ПРОГРЕССА (*контейнер прогресса наполнен в соответствии со значением, переданным в инпут)
Каждый раз после отправки формы очищать инпуты
Карточке и форме добавить стили на выбор */

const formElem = document.querySelector(".form");

const workersArr = [];

const cardsRender = () => {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerText = "";

  workersArr.forEach(
    ({ firstName, lastName, age, rate, days, email, photo, progress }) => {
      const card = document.createElement("div");
      const firstNameEl = document.createElement("p");
      const lastNameEl = document.createElement("p");
      const ageElem = document.createElement("p");
      const salaryElem = document.createElement("p");
      const emailElem = document.createElement("a");
      const photoElem = document.createElement("img");
      const progressElem = document.createElement("p");
      const progressContainer = document.createElement("div");
      const progressLine = document.createElement("div");
      const progressValue = document.createElement("p");

      firstNameEl.innerText = `First name: ${firstName}`;
      lastNameEl.innerText = `Last name: ${lastName}`;
      ageElem.innerText = `Age: ${age}`;
      salaryElem.innerText = `Salary: ${rate * days}`;
      emailElem.innerText = email;
      progressValue.innerText = progress + "%";

      card.classList.add("card");
      photoElem.classList.add("photo");
      emailElem.setAttribute("href", `mailto: ${email}`);
      photoElem.setAttribute("src", photo);
      photoElem.setAttribute("alt", "workers_photo");
      progressContainer.classList.add("progress-container");
      progressLine.classList.add("progress-line");
      progressValue.classList.add("progress-value");

      progressLine.style.width = progress + "%";

      progressContainer.append(progressLine, progressValue);
      card.append(
        firstNameEl,
        lastNameEl,
        ageElem,
        salaryElem,
        emailElem,
        photoElem,
        progressContainer
      );
      cardsContainer.append(card);
    }
  );
};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const { firstName, lastName, age, rate, days, email, photo, progress } =
    event.target;

  workersArr.push({
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    rate: rate.value,
    days: days.value,
    email: email.value,
    photo: photo.value,
    progress: progress.value,
  });

  firstName.value = "";
  lastName.value = "";
  age.value = "";
  rate.value = "";
  days.value = "";
  email.value = "";
  photo.value = "";
  progress.value = "";

  cardsRender();
  console.log(workersArr);
});
