// 1. Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.

const button = document.querySelector(".button");
let btn_params = 30;

const btn_render = (size) => {
  button.style.height = size + "px";
  button.style.width = size + "px";
};

btn_render(btn_params);

button.addEventListener("click", () => {
  btn_params += 10;

  btn_render(btn_params);
});


// 2. Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона

const color_btn = document.querySelector("#color_btn");

const get_color = () => Math.round(Math.random() * 255);

color_btn.addEventListener("click", (event) => {
  event.target.style.backgroundColor = `rgb(${get_color()}, ${get_color()}, ${get_color()})`;
});


// 3. Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).

const random = document.querySelector(".random");
const game_result = document.querySelector(".game_result");

const get_number = () => Math.round(Math.random() * 5 + 1);

random.addEventListener("click", () => {
  game_result.innerText = `${get_number()} X ${get_number()}`;
});


// 4. Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).

const photos = [
    'https://reqres.in/img/faces/1-image.jpg',
    'https://reqres.in/img/faces/2-image.jpg',
    'https://reqres.in/img/faces/3-image.jpg',
    'https://reqres.in/img/faces/4-image.jpg',
    'https://reqres.in/img/faces/5-image.jpg'
    ];

const slider = document.querySelector(".slider");
let photoIndex = 0;

slider.addEventListener("click", (event) => {
  event.target.src = photos[photoIndex++ % photos.length];
});

