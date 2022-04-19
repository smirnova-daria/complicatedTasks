'use strict'

const input = document.querySelector('input')
const paragraph = document.querySelector('p')


const print = () => {
	paragraph.textContent = ''
	paragraph.textContent += input.value
}

const debounce = function (f, t) {
	return function () {
		let previousCall = this.lastCall;
		this.lastCall = Date.now()

		if (previousCall && ((this.lastCall - previousCall) <= t)) {
			clearTimeout(this.lastCallTimer)
		}
		this.lastCallTimer = setTimeout(f, t)
	}
}

input.addEventListener('input', debounce(print, 300))