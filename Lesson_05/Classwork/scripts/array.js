let arr = [1, 2, 3, 4, 5];

// arr.push('string');   // добавляет элемент в конец
// arr.pop();           // извлекает элемент из конца

// arr.shift();        // извлекает элемент из начала
arr.unshift(0);    // добавляет элемент в начало

console.log(arr);  





// .forEach  - выполняет указанную функцию для каждого элемента массива один раз.


// Задача: вывести в консоль числа больше 50

// let array = [1, 90, 55, 3, -10, 78];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 50) {
//         console.log(array[i]);
//     }
// }



// array.forEach(function(element) {
//     if (element >= 50) {
//         console.log(element);
//     }
// });




// array.forEach((element) => {
//     if (element >= 50) {
//         console.log(element);
//     }
// });


// Каждый элемент массива умножается на 2

// let array = [1, 90, 55, 3, -10, 78];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i] * 2);
// }

// array.forEach(function(el) {
//     console.log(el * 2);
// });


// array.forEach(el => console.log(el * 2));



// Сформировать массив из чисел, заканчивающихся на 5. Вывести результат в консоль

// через цикл for


// let array = [1, 90, 55, 3, -10, 75];

// let newArr = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 10 === 5) {
//         newArr.push(array[i]);
//     }
// }

// console.log(newArr);

// // через метод .forEach()

// let newArr2 = [];
// array.forEach(el => {
//     if (el % 10 === 5) {
//         newArr2.push(el)
//     }
// });

// console.log(newArr2);


// Cформировать массив из последних цифр чисел. вывести результат в консоль => [1, 0, 5, 3, 0, 8, 5]

let array = [1, 90, 55, 3, -10, 75];

// // цикл for

// let newArr = [];

// for (let i = 0; i < array.length; i++) {
//     newArr.push(Math.abs(array[i] % 10))
// }

// console.log(newArr);



// // метод .forEach()

// let newArr2 = [];
// array.forEach(el => newArr2.push(Math.abs(el % 10)));

// console.log(newArr2);