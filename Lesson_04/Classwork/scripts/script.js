// Napishite zikl for, kotoriy vivodit chisla v konsol ot 0 do 10.

// let showNumbers = () => {
//     for (let i = 0; i <= 10; i++) {
//         console.log(i);
//     }
// }

// showNumbers();

// virajenie1;  - nachalnoye znacheniye schetchika
// virajenie2;  - usloviye povtoreniya zikla
// virajenie3;  - izmenenie schetchika

// Napishite zikl for, kotoriy vivodit chisla v konsol ot 10 do 0.


// let showNumbers = () => {
//     for (let i = 10; i >= 0; i--) {  // i -= 1
//         console.log(i);
//     }
// }

// showNumbers();

// ================================================================================================================================

// Napishite zikl for, kotoriy vivodit chisla v konsol ot 0 do 10 s shagom 2.


// let showNumbers = () => {
//     for (let i = 0; i <= 10; i += 2) {
//         console.log(i);  
//     }
// }

// showNumbers();



// Napishite zikl for, kotoriy vivodit chisla v konsol ot 5 do 10.




// let showNumbers = () => {
//     for (let i = 5; i <= 10; i += 1) { // i++
//         console.log(i);  
//     }
// }

// showNumbers();


// V programme zadani 2 peremennie n i m s chislovim znacheniem kajdaya. Chislo n bolshe chisla m.
// Napishite zikl, kotoriy vivodit v konsol vse chetniye chisla ot m do n.



// let  getNumbers = (n, m) => {
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// getNumbers(20, 10);


// let getNumbers = (n, m) => {
//     for (let i = m; i <= n; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       } 
//     }
// }

// getNumbers(20, 9);



// V programme zadani 2 peremennie n i m s chislovim znacheniem kajdaya.
// Napishite zikl, kotoriy vivodit v konsol chisla ot bolshego chisla do menshego.



// let getNumbers = (n, m) => {
//     if (n > m) {
//         for (let i = n; i >= m; i--) {
//             console.log(i);
//         }
//     } else if (m > n) {
//         for (let i = m; i >= n; i--) {
//             console.log(i);
//         }
//     } else {
//         console.log(`Number ${n} and number ${m} are equal`); 
//     }
// }

// getNumbers(45, 45);



//Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.


// let getSum = () => {
//     let result = 1; 
//     for (let i = 1; i <= 10; i++) {
//         result += i;   // result = result + i; // 1 + 1; 2 + 2; 4 + 3; 7 + 4 ...
//     }
//     return result;
// }

// console.log(getSum());




// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел 
// и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 

// 1. у функции есть аргументы n и m
// 2. найти два числа
// 3. выполнить проверку на четность/нечетность




// let getSum = (n, m) => {
//     let evenResult = 0;
//     let oddResult = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       evenResult += i;
//     } else {
//       oddResult += i;
//   }
//   } 
//   console.log(`Сумма четных чисел в диапазоне от ${n} до ${m} равна ${evenResult}`);
//   console.log(oddResult);
// };

// getSum(10, 30);



// let getSum = (n, m) => {
//     let evenResult = 0;
//     let oddResult = 0;
//     for (let i = n; i <= m; i++) {
//         if (i % 2 === 0) {
//             evenResult += i;
//         } else {
//             oddResult += i;
//         }
//     }
//     console.log(`Summa chetnich chisel v diapozone ot ${n} do ${m} ravna ${evenResult}`);
//     console.log(oddResult);
// }

// getSum(10, 20);






