const currentColor = document.querySelector('.color'),
	  changeBtn = document.getElementById('change'),
	  colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


changeBtn.addEventListener('click', () => {
	let hex = '#';
	for(let i = 0; i < 6; i++) {
		let random = Math.floor(Math.random()*colors.length);
		const randomColor = hex += colors[random];
		currentColor.innerText = randomColor;
		document.body.style.background = randomColor;
	}
});







