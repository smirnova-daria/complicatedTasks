'use strict';

const divFirst = document.querySelector('.first');
const divSecond = document.querySelector('.second');

const printTime = function () {
	const time = new Date();

	const formatter1 = new Intl.DateTimeFormat("ru");

	const formatter2 = new Intl.DateTimeFormat("ru", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	const formatter3 = new Intl.DateTimeFormat("ru", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	});
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	let hoursDesc = '';
	let minutesDesc = '';
	let secondsDesc = '';

	if (hours === 1 || hours === 21) {
		hoursDesc = ' час ';
	} else if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
		hoursDesc = ' часа ';
	} else {
		hoursDesc = ' часов ';
	}

	if ((minutes % 10 === 1) && (minutes != 11)) {
		minutesDesc = ' минута ';
	} else if ((minutes % 10 >= 2) && (minutes % 10 <= 4)) {
		minutesDesc = ' минуты ';
	} else {
		minutesDesc = ' минут ';
	}

	if ((seconds % 10 === 1) && (seconds != 11)) {
		secondsDesc = ' секунда ';
	} else if ((seconds % 10 >= 2) && (seconds % 10 <= 4)) {
		secondsDesc = ' секунды ';
	} else {
		secondsDesc = ' секунд ';
	}

	divFirst.textContent = 'a) Сегодня ' + formatter2.format(time)[0].toLocaleUpperCase() + formatter2.format(time).slice(1, -1) + 'ода, ' + (hours + hoursDesc + minutes + minutesDesc + seconds + secondsDesc);
	divSecond.textContent = 'b) ' + formatter1.format(time) + ' - ' + formatter3.format(time);
};

printTime();
setInterval(printTime, 500);