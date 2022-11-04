
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
//rate (ставка за день работы), days (количество отработанных дней). 
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.

// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней amount)



class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  get_salary() {
    return this.rate * this.days;
  }

  add_days(amount) {
    return this.days += amount;
  }

  delete_days(amount) {
    return this.days -= amount;
  }
}

let worker_1 = new Worker("Alex", "King", 80, 22);
let worker_2 = new Worker("Amelie", "Lorentz", 95, 10);

console.log(worker_1.get_salary() + worker_2.get_salary());

console.log(worker_1.add_days(10));  // 32
console.log(worker_2.delete_days(5));  // 5