'use strict';

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
const week = {
	'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(week[lang]);

//задание 2
const namePerson = 'Александр';

namePerson === 'Артем' ? console.log('директор') :
	namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент');

