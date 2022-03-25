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

