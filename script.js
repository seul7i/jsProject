//Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");


//Moving Animation Event
container.addEventListener('mousemove', (e) =>{
	console.log(e.pageX, e.pageY);
	let xAxis = ( window.innerWidth / 2 - e.pageX);
	let yAxis = ( window.innerWidth / 2 - e.pageY);
	card.style.transform = 'rotateX(${yAxis}deg) rotateY(${xAxis}deg)'
});