'use strict';

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