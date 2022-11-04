

//Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

let user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
  };

//   console.log(user.age);  // 20
//   console.log(user.first_name);  // 'Ivan'



//   let age_key = 'age';
//   let first_name_key = 'first_name';

//   console.log(user[age_key]);  // 20
//   console.log(user[first_name_key]);  // 'Ivan'


// const getProperty = (obj, key) => obj[key];

// console.log(getProperty(user, 'first_name'));  // Ivan
// console.log(getProperty(user, 'city'));   // Moscow
// console.log(getProperty(user, 'age'));    // 20



// function getProperty(obj, key) {
//   return obj[key];
// }

// console.log(getProperty(user, 'first_name'));  // Ivan
// console.log(getProperty(user, 'city'));   // Moscow
// console.log(getProperty(user, 'age'));    // 20



const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ];
  

  const getProperty2 = (arr, key) => arr.map(el => el[key]);
  

  console.log(getProperty2(people, 'first_name'));  // ['Ivan', 'Petr', 'irina', 'Denis']
  console.log(getProperty2(people, 'age'));  // [20, 12, 46, 30]
 