'use strict';

//задание 1

const arr = ['2506', '6532', '895325', '45268', '754', '9654', '4365'];

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] === '2' || arr[i][0] === '4') {
		console.log(arr[i]);		
	}
}

//задание 2

for (let i = 2; i <= 100; i++) {
	let dividerCount = 0; 

	for (let k = 2; k < i; k++) {		
		if (i % k === 0) {
			dividerCount++;
		}
	}

	if (dividerCount === 0) {
		console.log(i + ' Делители этого числа: 1 и ' + i);	
	}
}