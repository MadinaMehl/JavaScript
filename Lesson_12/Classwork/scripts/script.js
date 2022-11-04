// Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
    constructor(name, major, number) {
        this.name = name;
        this.major = major;
        if (number === undefined) {
            this.number = 15;
        } else {
            this.number = number;
        }
    }

    add_student() {
        this.number += 1;
    }

    delete_student() {
        this.number -= 1;
 }
}

const group_22_27 = new Group('Group_22_27', 'Frontend', 4);
const group_28_29 = new Group('Group_28_29', 'Backend');

group_22_27.add_student(); // => 5
group_22_27.delete_student(); // => 4
group_22_27.add_student(); // => 5
group_22_27.add_student(); // => 6
group_22_27.add_student(); // => 7



// console.log(group_22_27);
// console.log(group_28_29);



// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив 

let all_groups_arr = [];

const all_groups = (group_name, group_major, group_amount) => {
    all_groups_arr.push(new Group(group_name, group_major, group_amount));
}

all_groups('Group_22_27', 'Frontend', 4);
all_groups('Group_28_29', 'Backend');
all_groups('Group_38_40', 'QA', 20);

console.log(all_groups_arr);



[
    {
        name: 'Group_22_27',
        major: 'Frontend',
        number: 4
    },

    {
        name: 'Group_28_29',
        major: 'Backend',
        number: 15  
    },

    {
        name: 'Group_38_40',
        major: 'QA',
        number: 20
    }
]