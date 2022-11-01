const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia'
    },
  
    {
      first_name: 'Petr',
      last_name: 'Petrov',
      age: 12,
      city: 'Berlin',
      country: 'Germany'
    },
  
    {
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France'
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      city: 'Rome',
      country: 'Italy'
    }
  ];
  
// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку 
// в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]


let userInfo = people.map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country})`);
console.log(userInfo);


//2. Сформируйте массив из людей, чьи имена начинаются на 'I' (регистр буквы может быть и нижним)

let names = people.filter(el => el.first_name[0].toUpperCase() === 'I');
console.log(names);



//3. Получите из массива объект, где страной проживания человека является 'Germany' 

let country = people.find(el => el.country === 'Germany');
console.log(country);

