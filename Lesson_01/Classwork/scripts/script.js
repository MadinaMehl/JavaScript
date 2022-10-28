// alert('hello, world!');
// const name = 'Madina';
// let name_1 = 'Madina'; // stroka (string)
// let lastname = "Mel";
// const city = `Moscow`;
// const age = 22; // chislo (number)
// const nelzya pereopredelyat!
// name = 'Olga'; 

// ============ // tipi dannich // =====================

// console.log('hello, ' + name_1 + ' ' + lastname + '!'); // konkatenatsiya
// console.log(`hello, ${name_1} ${lastname}!`); // interpolyatsiya

// console.log(2+3);
// + , - , / , *  , ** ,  % , (2**3); (95 % 10); == , ===

// =============== //     // ==========================================


// Напишите программу, которая берет исходное количество евро (например, 100 евро), записанное в переменную euros, 
// переводит евро в доллары и выводит на экран.
// Затем полученное значение переводит в рубли и выводит на новой строчке. // 1 euro = 1.25 dol// 1 dol = 70 rub

// let euro = 100;
// const index1 = 1.25;
// const index2 = 70;
// let doll = euro * index1;
// let rub = doll * index2;

// console.log(`Yours ${euro} EU equal ${doll}$ 
// and yours dollars are ${rub} rubels
// `);

//===================================================================

// let name = 'Madina';
// let num = 3;
// let num2 = '12';

// console.log(num);
// console.log(-num);
// console.log(+num);

// console.log('This is string: ' + num2);
// console.log(+num2);

// console.log(num2);
// console.log(+ '12');
// console.log(+ 'hello');


// console.log(2 + 5); // 7
// console.log('Hello,' + name); // Hello, Madina
// console.log('hello' + 12); // hello12
// console.log('12' + 12); // 1212
// console.log('10' - 5); // 5
// console.log('dododo123' - 5); // NaN

//=========== // binarnie/unarnie operatori // ==========================//


// let name = 'Madina';
// let age = 22;

// console.log(typeof(name)); // string
// console.log(typeof(age)); // number


// kak uznat tip dannich // ==========================================

// let name = prompt('Your name:');
// let lastname = prompt('Your lastname:');
// let age = +prompt('Your age:');

// console.log(typeof(age));

// console.log(`Hello, ${name} ${lastname}! Your age is ${age}.`);

// if (age < 18) {
//     console.log(`Hi, ${name} ${lastname}! Your age is ${age}.`);
// }else if (age >= 18) {
//     console.log(`Hello, ${name} ${lastname}! Your age is ${age}.`);
// } else {
//     console.log(`Dear ${name} ${lastname}, your age is incorrect`);
// }

// ================================================================

// let lastname = 'Orlova';

// console.log(lastname[4]); // index simvola stroki 0-1, 1-2, 2-3 ...