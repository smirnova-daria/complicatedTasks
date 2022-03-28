'use strict';

let num = 266219;

//переменная для результирующего значения
let multiplication = 1;

//цикл для произведения цифр числа num
while (num) {
	multiplication *= (num % 10);
	num = Math.floor(num / 10);
}

console.log(multiplication);

let exponentiation = multiplication ** 3;

console.log(exponentiation.toString().substring(0, 2));

//урок 3
//задание 1
const lang = 'en';

//a
if (lang === 'ru') {
	console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');	
} else if (lang === 'en') {
	console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');	
}

//b
switch (lang) {
	case 'ru':
		console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
		break;
	case 'en':
		console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
		break;
}

//c
const week = [
	'ru', ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
	'en', ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']	
];
console.log(week[week.indexOf(lang)+1][0]);

//задание 2
const namePerson = 'Александр';

namePerson === 'Артем' ? console.log('директор') :
	namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент');

