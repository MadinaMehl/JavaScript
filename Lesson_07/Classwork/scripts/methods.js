
// .forEach() - выполняет указанную функцию один раз для каждого элемента массива

// .filter() - создает новый массив со всеми элементами, которые прошли проверку, задаваемую в переданной функции

// .map() - возвращает/создает новый массив с результатом вызова указанной функции для каждого элемента массива

// .reduce() - служит для того, чтобы мы получили какое-то финальное значение, совершив итерацию по массиву


// let arr = [5, 1, 8, 17];
// console.log(arr);


// // for.Each()

// let arrNew = [];

// arr.forEach(el => {
//     arrNew.push(el ** 2);
// });

// console.log(arrNew);


// // .map()

// const arrNew2 = arr.map(el => el ** 2);

// console.log(arrNew2);





let arr = [67, 137, 5, 84, 299, 777, 500, 1, 8, 17, 56];


arr.forEach(el => console.log(el));



// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// forEach(arr, console.log);





// Дан массив из строк. Сформировать массив только из слов длиннее 10 символов. Вывести результат в консоль.

// let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];


// let newArr = arr.filter(el => el.length >= 10);
// console.log(newArr);


//Дан массив из разных типов данных. 
//Необходимо сформировать новый массив, состоящий только из чисел (если значение не число, то подставить 'не число')

// let arr = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// [8, 'не число', 'не число', 'не число', 'не число', 122, 'не число', 15]

// let newArr = arr.map(el => {

//     if (typeof el === 'number') {
//         return el;
//     } else {
//         return'не число';
//     }
// });

// console.log(newArr);



// let newArr = arr.map(el => (typeof el === 'number') ? el : 'не число');
// let newArr2 = arr.map(el => (typeof el !== 'number') ? 'не число' : el);

// console.log(newArr);
// console.log(newArr2);