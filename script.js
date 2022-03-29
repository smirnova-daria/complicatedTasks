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


//урок 4

const func = function (arg) {
	if (typeof arg !== 'string') {
		return 'Аргумент не строка';
	}
	if (arg.trim().length > 30) {
		return arg.trim().substring(0, 30) + '...';
	}
	return arg.trim();
};

console.log(func(123));
console.log(func(true));
console.log(func('     Очень длинная строка, количество символов без учета пробелов более 30 знаков        '));
console.log(func('маленькая строка'));
console.log(func('                  маленькая строка и пробелы             '));