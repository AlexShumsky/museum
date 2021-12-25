'use strict'
const inputSlider = document.querySelectorAll('.input-slider');
inputSlider.forEach(slider => slider.oninput = inputManager);
function inputManager(e) {
	const element = (e.target.id == 'video__progress') ? 'video' : 'audio';
	changeProgressVisualThumb(this, element);
	changeProgressVisualActive(this, element);
}
function changeProgressVisualThumb(e, element) {
	console.log(e.value)
	const barValue = e.value;
	const thumb = document.querySelector(`.${element}__progress .thumb`);
	(element == 'video') ? thumb.style.left = barValue + '%' :
		thumb.style.left = barValue * 100 + '%';
}
function changeProgressVisualActive(e, element) {
	const barValue = e.value;
	const progressActive = document.querySelector(`.${element}__progress .progress__bar`);
	(element == 'video') ? progressActive.style.width = barValue + '%' :
		progressActive.style.width = barValue * 100 + '%';
}
