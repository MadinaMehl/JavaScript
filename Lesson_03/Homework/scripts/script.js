// 1. Napishite funkziu, kotoraya prinimayet v kachestve argumenta stroku, a vozvrachaet ee dlinu. Vivedite
// rezultat v konsol. Zapishite 2 varianta sintaksisa (function declaration i arrow function).

// function declaration

// function getLength (string) {
//     return string.length;
// }
// console.log(getLength('hello!'));

// arrow function

// let getLength = (string) => string.length;
// let getLength = (string) => `Dlina stroki '${string}' ravna ${string.length}`;

// console.log(getLength('hello!'));

// =============================================================================================================================================

// 2. Napishite funkziu, kotoraya prinimayet 2 argumenta (osnovaniye stepeni i samu stepen) i vozvrachayet
// chislo v ukazannoy stepeni. Znacheniye stepeni doljno bit ukazano po umolchaniyu 2. Zapishite
// 2 varianta sintaksisa (function declaration i arrow function).

// arrow function

// let getNumber = (base, exp = 2) => base ** exp;
// let getNumber2 (base, exp = 2) => Math.pow(base, exp); // 2 sposob

// console.log(getNumber(2, 3));
// console.log(getNumber2(2, 4));

// declaration function

// function getNumber(base, exp = 2) {
//     return base ** exp;
// }
// console.log(getNumber(2));

// ==============================================================================================================================================

// 3. Napishite funkziu, kotoraya prinimayet 2 argumenta s chislovim znacheniyem i vozvrachayet bolshee znacheniye.
// Vivedite rezultat v konsol. Predlojite 2 varianta resheniya (cherez uslovniy operator i Math.max()).

// let getMaxNum = (num1, num2) => num1 > num2 ? num1 : num2;
// console.log(getMaxNum(5, 8));



// let getMaxNum = (num1, num2) => {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         return `Two numbers are equal`
//     }
// }

// console.log(getMaxNum(30, 15));



// let getMaxNum = (num1, num2) => {
//     if (num1 == num2) {
//         return `Two numbers are equal`
//     }
//     return Math.max(num1, num2);
// }
// console.log(getMaxNum(30, 25));




// let getMaxNumber = (a, b) => {
//     if (a > b) {
//       return a
//     } else if (b > a) {
//         return b
//     } else {
//         return `Two numbers are equal`;
//     }
// }

// let getMaxNumber2 = (a, b) => {
//     if (a == b) {
//         return `Two numbers are equal`;
//     }
//     return Math.max(a, b);
// }

// console.log(getMaxNumber(30, 30));

// =============================================================================================================================================

// 4. Napishite funkziu, kotoraya prinimayet v kachestve argumentov 3 chisla i vivodyachuyu v konsol otsortirovanniye
// chisla po ubivaniyu. Ispolzuyte uslovniy operator.


//  let sortNumbers = (a, b, c) => {
//     if (a > b && a > c) {
//         if (b > c) {
//             console.log(a, b, c);
//         } else {
//             console.log(a, c, b);
//         }
//     } else if (b > a && b > c) {
//         if (a > c) {
//             console.log(b, a, c);
//         } else {
//             console.log(b, c, a);
//         }
//     } else {
//         if (a > b) {
//             console.log(c, a, b);
//         } else {
//             console.log(c, b, a);
//         }
//     }
// }

// console.log(sortNumbers(5, 90, 1));

// ==================================================================================================================================

// 5. Napishite funkziu, kotoraya prinimayet v kachestve argumentov 5 chisel i vivodyachuyu v konsol naibolshee uz nich.
// Ispolzuyte uslovniy operator.


// let getMaxNumber = (a, b, c, d, e) => {
//   if (a > b && a > c && a > d && a > e) {
//     console.log(a);
//   } else if (b > a && b > c && b > d && b > e) {
//     console.log(b);
//   } else if (c > a && c > b && c > d && c > e) {
//     console.log(c);
//   } else if (d > a && d > b && d > c && d > e) {
//     console.log(d);
//   } else {
//     console.log(e);
//   }
// };

// getMaxNumber(3, 7, 1, -8, 87);
