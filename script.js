'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const body = document.querySelector('body');
const today = new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(new Date());

week.forEach(function (value) {
	const paragraph = document.createElement('p');
	paragraph.textContent = value;
	if (value === 'Суббота' || value === 'Воскресенье') {
		paragraph.classList.add('italic');
	}
	if (value.toLowerCase() === today) {
		paragraph.classList.add('bold');		
	}
	body.appendChild(paragraph);
});