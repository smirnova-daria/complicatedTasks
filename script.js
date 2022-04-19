'use strict'

const ballon1 = document.querySelector('.ballon1')
const ballon2 = document.querySelector('.ballon2')
const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')

let count = 0
let idInterval
let isClicked = false

const flyAnimate = () => {
	count++

	idInterval = requestAnimationFrame(flyAnimate)

	if (count < 400) {
		ballon2.style.bottom = count * 1.5 + 'px'
		ballon1.style.bottom = count + 'px'
	} else if (count < 500) {
		ballon1.style.bottom = count + 'px'
	} else {
		cancelAnimationFrame(idInterval)
	}
}

startBtn.addEventListener('click', () => {
	isClicked = !isClicked
	if (isClicked) {
		flyAnimate()
	} else {
		cancelAnimationFrame(idInterval)
	}
})

resetBtn.addEventListener('click', () => {
	cancelAnimationFrame(idInterval)
	isClicked = false
	count = 0
	ballon2.style.bottom = 0 + 'px'
	ballon1.style.bottom = 0 + 'px'
})