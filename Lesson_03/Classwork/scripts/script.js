// Funktions - nujni dlya vipolneniya kakich-libo deystviy (est 2 sposoba zapisi funkziy)
// Nekiy shablon deystviya po kotoromu budit vipolnyatsa eto deystvie s opredelennimi argumentami.

// Funktion declaration (obyavleniye funkzii)

// function funcName(arguments) {
//     // telo funkzii
// } 


// function showMessage(firstname) {
//     console.log(`Hello ${firstname}`); // bespoleznaya operatsiya
// }

// showMessage('Madina');
// showMessage('Dima');
// showMessage('Emilia');



// console.log(showMessage('Nelli'));
// console.log(showMessage('Alex'));
// console.log(showMessage('Dima'));

// function showMessage(firstname) {
//  return `Hello ${firstname}` 
// }

// ========================================================================================================================================


// Funkzionalnoye virajeniye

// let message = function showMessage(firstname) {
//  return `Hello ${firstname}` 
// }

// console.log(message('Oleg'));

// console.log(showMessage('Nelli'));
// console.log(showMessage('Alex'));      // ne srabotaet 
// console.log(showMessage('Dima'));

// =============================================================================================================================================

// Strelochniye funkzii

// let getMessage = (age) => {
//     // virajeniye
// } 


// let getMessage = (age = 10) => {
//     return `You are ${age} years old`;
// } 

// console.log(getMessage());



// let showMessage = (firstname, lastname = 'Petrov') => `Hello ${firstname} ${lastname}`;

// console.log(showMessage('Oleg'));

// let getMessage1 = age => `You are ${age} years old`; // 2 pravilniy sposob
// console.log(getMessage1(20));

// =======================================================================


// 1. Realizuyte funkziu, kotoraya prinimayet v kachestve argumentov 2 chisla
// i vozvrachayet ih summu. Vivedite rezultat v konsol. Zapishite 2 varianta
// sintaksisa (function declaration i arrow function).

// 1 sposob (declaration function)


// function getSum(num1, num2) {
//     return num1 + num2;
// }

// console.log(getSum(5, 5));


// function getSum(num1, num2) {
//    return num1 + num2; 
// }

// console.log(getSum(1, 2)); // 3
// console.log(getSum(4, 5)); // 9
// console.log(getSum(10, 85)); // 95



// 2 sposob (arrow function)

// let getSum = (num1, num2) => num1 + num2;

// console.log(getSum(5, 5));


// let getSum2 = (num1, num2) => num1 + num2;
    
// console.log(getSum2(1, 2)); // 3
// console.log(getSum2(4, 5)); // 9
// console.log(getSum2(10, 85)); // 95

// =======================================================================

// 2. Zapishite funkziu, kotoraya prinimayet v kachestve argumenta chislo i
// vozvrachaet ego absolutnoye znachenie. Vivedite rezultat v konsol. Zapishite 2 varianta
// sintaksisa (function declaration i arrow function). Math.abs()


// 1 sposob 


// function getAbs(num) {
//     return Math.abs(num);
// }

// console.log(getAbs(-6));



// 2 sposob

// let getNum = (num) => Math.abs(num);

// console.log(getNum(-5));

// =======================================================================

// 3. Napishite funkziu, kotoraya prinimayet v kachestve argumenta stroku i
// ee je, no so vsemi bukvami v verchnem registre. Vivedite rezultat v konsol. Zapishite 2 varianta
// sintaksisa (function declaration i arrow function). .toUpperCase()


// 1 sposob

// function getUpperCase(string) {
//     return string.toUpperCase();
// }

// console.log(getUpperCase('Hello, world!'));



// 2 sposob

// let getStr = string => string.toUpperCase();

// console.log(getStr('Hello, world!'));

// ======================================================================`


// 4. Napishite funkziu, kotoraya prinimayet 2 stroki i vozvrachayet 
// naibolee dlinnuyu iz nich. Vivedite rezultat v konsol. 


// function getStrLength(str1, str2) {
//     if (str1.length > str2.length ) {
//         return str1;
//     } else if (str1.length < str2.length){
//         return str2;
//     } else {
//         return `Two strings are equal`
//     }
// }

// console.log(getStrLength('Madina', 'Madina'));



// let getString = (str1, str2) => str1.length > str2.length ? str1 : str2;
// console.log(getString('Mila', 'Mia'));


// let getLongestString = (string1, string2) => {
//     if (string1.length > string2.length) {
//         return string1
//     } else if (string2.length > string1.length) {
//         return string2 
//     } else {
//         return `Two strings are equal`
//     }
// }

// console.log(getLongestString('string 12', 'string 21'));

// ======================================================================

// 5. Napishite funkziu, kotoraya prinimayet 3 argumenta: imya, familiyu i
// vozrast . Esli vozrast bolshe ili raven 18, to funkziya vozrachayet
// stroku v formate: 'Zdravstvuyte, <Imya> <Familiya>. Esli vozrast
// menshe 18, to funkziya vozvrachaet stroku v formate: 'Privet, <Imya> 
// <Familiya>. Vivedite rezultat v konsol.


// let getGreeting = (name, lastName, age) => {
//     if (age >= 18) {
//      return `Zdravstvuyte, ${name} ${lastName}.`;
//     } else {
//      return `Privet, ${name} ${lastName}.`;
//     }
// }

// console.log(getGreeting('Madina', 'Mehl', 22));