// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];


// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.

arr.unshift(67);
arr.push(56);
console.log(arr);

// 2. Сформируйте массив из чисел меньше 100. Предложите два варианта решения (цикл for и метод .forEach). Выведите в консоль результат.


// for

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 100) {
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);


// for.Each

// let newArr = [];

// arr.forEach(el => {
//     if (el < 100) {
//         newArr.push(el);
//     }
// });

// console.log(newArr);



// let newArr = arr.map(el => {   // vsegda sohranyaet ishodniy razmer massiva (nevernoe reshenie v dannom sluchae)
//     if (el < 100) {
//         return el;             
//     }
// });

// console.log(newArr);


// let newArr = arr.filter( el => {
//     return el < 100
// });

// console.log(newArr);



let newArr = arr.filter(el => el < 100);

console.log(newArr);



// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7. Предложите два варианта решения (цикл for и метод .foreach).

// for

// let newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 10 === 7) {
//         newArr2.push(arr[i]);
//     }   
// }
// console.log(newArr2);



// for.Each

// let newArr2 = [];

// arr.forEach(el => {
//     if (el % 10 === 7) { 
//         newArr2.push(el);
//     }
// });

// console.log(newArr2);



// .filter()

let newArr4 = arr.filter(el => el % 10 === 7 || el % 10 === 5 || el % 10 === 0);

console.log(newArr4);


// 4. Сформируйте массив, в котором числа больше или равно 100 заменены на строку '>100', а числа меньше ста - на '<100'


// let newArr3 = [];

// arr.forEach(el => {
//     if (el >= 100) {
//         newArr3.push('>100');
//     } else {
//         newArr3.push('<100')
//     }
// });

// console.log(newArr3);


// let newArr3 = arr.map((el) => {
//   if (el >= 100) {
//     return ">100";
//   } else {
//     return "<100";
//   }
// });

// console.log(newArr3);

// const result = arr.map(el => (el <= 100) ? '<100' : '>100');
// console.log(result);