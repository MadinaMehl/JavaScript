// 1. Напишите функцию с циклом for, которая выводит числа в консоль от 100 до 0 с шагом 10.


// let showNums = () => {
//     for (let i = 100; i >= 10; i -= 10) {
//         console.log(i);
//     }
// }

// showNums();


// 2. Напишите функцию с циклом for, которая выводит числа в консоль от 25 до 67 c шагом 3.

// let getNum = () => {
//     for (let i = 25; i <= 67; i += 3) {
//        console.log(i);
        
//     }
// }

// getNum();


// 3. Напишите функцию с циклом for, которая перемножает числа от 3 до 6. Выведите результат в консоль.

// let getMulty = () => {
//     let result = 1;
//     for (let i = 3; i <= 6; i++) {
//         result *= i
//     }
//     return result;
// }

// console.log(getMulty());
// // 3 * 4 * 5 * 6 = 360

// let result = getMulty();
// console.log(result);


// 4. Задана переменная n. Напишите функцию, которая с помощью цикла for считает сумму чисел от 1 до n и выводит в консоль.


// let getSum = (n) => {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i
//     }
//     return result;
// }

// console.log(getSum(10));



// 5. Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.



// let showLetter = (str) => {
//     for (let i = 0; i < str.length; i++) {
//       console.log(str[i]);  
//     }
// }

// showLetter('My name is Madina');


 
// 6. Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 и 5. Выведите сумму в консоль.


// let getSum = () => {
//     let result = 0;
//     for (let i = 0; i <= 100; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         result += i;
//       }  
        
//     }
//     return result;
// }

// console.log(getSum());