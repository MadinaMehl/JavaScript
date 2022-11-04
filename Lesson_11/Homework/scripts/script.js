// ЗАДАЧА 1
// Реализуйте класс Car (Машина), который будет иметь следующие свойства:
// name (марка), model (модель), country (страна изготовитель), volume (объем двигателя)
// Создайте экземпляр этого класса
// Выведете в консоль все свойства созданного экземпляра класса
    
    class Car {
        constructor(name, model, country, volume) {
            this.name = name;
            this.model = model;
            this.country = country;
            this.volume = volume;
        }
    }

    let car_1 = new Car('BMW', 'X3', 'Germany', 3.0);
  
    // console.log(car_1);
  
    

// ЗАДАЧА 2
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
// Создайте 3 экземпляра этого класса с разными свойствами
// Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса



    class Country {
        constructor(name, capital, population, climate) {
            this.name = name;
            this.capital = capital;
            this.population = population;
            this.climate = climate;
        }

        getInfo() {
            console.log(`Country: ${this.name}, Capital: ${this.capital}, Population: ${this.population}, Climate is ${this.climate}!`);
        }
    }


    let country_1 = new Country('Germany', 'Berlin', 88, 'cloudy');
    let country_2 = new Country('Russia', 'Moscow', 125, 'cold');
    let country_3 = new Country('UAE', 'Abu Dhabi', 10, 'warm');

    // console.log(country_1.capital);
    // console.log(country_2.name);
    // console.log(country_3.climate);

    country_1.getInfo();
    country_2.getInfo();
    country_3.getInfo();













