
// 1. Реализуйте класс Language (Язык), который будет иметь следующие свойства: 
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
// 2. Создайте экземпляр этого класса
// 3. Выведете в консоль все свойства созданного класса
// 4. Реализйуте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)


class Language {
    constructor(name, alphabet, country) {
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }

    get_info() {
        console.log(`Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`);
    }
}

const language = new Language('Russian', 'Cyrillic', 'Russia');
const language2 = new Language('English', 'Latin', 'United Kingdom');

language.get_info();

console.log(language.name);
console.log(language.alphabet);
console.log(language.country);
console.log(language2);