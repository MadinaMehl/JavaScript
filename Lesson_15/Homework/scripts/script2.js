const formElem = document.querySelector(".form");

let workersArr = [];

const cardsRender = () => {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerText = "";

  workersArr.forEach(({name, age, rate, days, email, photo}) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const salaryElem = document.createElement("p");
    const emailElem = document.createElement("a");
    const photoElem = document.createElement("img");

    nameElem.innerText = `Name: ${name}`;
    ageElem.innerText = `Age: ${age}`;
    salaryElem.innerText = `Salary: ${rate * days}`;
    emailElem.innerText = email;

    card.classList.add("card");
    photoElem.classList.add("photo");
    emailElem.setAttribute("href", `mailto: ${email}`);
    photoElem.setAttribute("src", photo);
    photoElem.setAttribute("alt", "userPhoto");

    card.append(nameElem, ageElem, salaryElem, emailElem, photoElem);
    cardsContainer.append(card);
  });
};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  //   let name = event.target.name.value;
  //   let age = event.target.age.value;
  //   let rate = event.target.rate.value;
  //   let days = event.target.days.value;
  //   let email = event.target.email.value;
  //   let photo = event.target.photo.value;

  const { name, age, rate, days, email, photo } = event.target;

  workersArr.push({
    name: name.value,
    age: age.value,
    rate: rate.value,
    days: days.value,
    email: email.value,
    photo: photo.value,
  });

  name.value = "";
  age.value = "";
  rate.value = "";
  days.value = "";
  email.value = "";
  photo.value = "";

  cardsRender();
  console.log(workersArr);
});
