// 1. Sozdayte peremennuyu  user i prisvoyte ey znacheniye: '   Ivan Ivanov '. Obnovite/peropredelite peremennuyu user, zapisav
// v nee to je samoye znacheniye, no bez lishnich probelov po krayam. Vivedite to, chto poluchilos v konsol.

// let user = '    Ivan Ivanov';
// user = user.trim();

// console.log(user);


// ==========================================================================================================================================

// 2. Napishite programmu, kotoraya vivodit v konsol randomnoye/ sluchaynoye chislo ot 0 do 1 i okruglyaet ego do tretiego znaka posle tochki.
// Tip vivodimich dannich doljen bit number.

// let random = Math.random(); // vivodim slichaynoe chislo ot 0 do 1
// console.log(+random.toFixed(3));

// let random = Math.random().toFixed(3);
// console.log(+random);

// console.log(+Math.random().toFixed(3)); // ne jelatelno tak pisat



// const random = Math.round(Math.random() * 10);
// const randomRounded = Math.round(random);

// console.log(random);
// console.log(randomRounded);
// ==============================================================================================================================================

// 3. Vivedite na ekran pervuyu i poslednyuyu bukvi predlojeniya, zapisannogo v konstantu text, v sled. formate:
// First: <pervaya bukva stroki>
// Last: <poslednyaya bukva stroki>


// const text = 'My name is Madina';
// const firstLetter = text[0];
// console.log(text.length);

// const lastLetter = text[text.length -1];

// console.log(`First: ${firstLetter}\nLast: ${lastLetter}`);



// const text = 'My name is Madina';

// console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);