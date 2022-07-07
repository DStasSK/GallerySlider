const gallery = document.querySelector('.gallery');
const galleryShadow = document.querySelector('.galleryShadow');
const testColor = document.querySelector('.test_color');
let galleryItemPull = 20;

const backgroundColor = [
	'#EFE45B', '#FFF8A6', '#FFF681', '#DDD13C', '#C7BB1C',
	'#3EA478', '#86CEAF', '#5CB690', '#299768', '#138956',
	'#EF855B', '#FFC0A6', '#FFA581', '#DD693C', '#C74D1C',
	'#7146A2', '#AA8BCC', '#8962B4', '#603195', '#4E1C87'
];
const backgroundImageURL = [];

// left position в % в зависимости от количества элементов
let lefPositionPull, a;
if(galleryItemPull>4) {
	lefPositionPull = [0, 2, 5, 10, 90, 95, 98, 100];
	a = 3;
}
if(galleryItemPull==4){
	lefPositionPull = [0, 2, 5, 10, 90, 95, 98];
	a = 3;
}
if(galleryItemPull==3){
	lefPositionPull = [0, 5, 10, 90, 95];
	a = 2;
}
if(galleryItemPull<=2){
	lefPositionPull = [0, 10, 90];
	a = 1;
}

// random start
let checkedIndex = Math.round(Math.random()*(galleryItemPull - 1));
// checkedIndex=0;


// стартовая генерация галереи
for(let i = 0; i < galleryItemPull; i++){
	let div = document.createElement('div');
	setLeftPosition(div, i);
	div.style.backgroundColor = backgroundColor[i];
	div.innerHTML = i+1;
	gallery.appendChild(div);

	// тестовая полоска цветов
	let div2 = document.createElement('div');
	div2.style.backgroundColor = backgroundColor[i];
	div2.style.width = 100 / galleryItemPull + '%';
	div2.innerHTML = i+1;
	testColor.appendChild(div2);
}


function setLeftPosition(item, i){
	let j = i - checkedIndex;
	let left;
	if(j < 0){
		left = lefPositionPull[Math.max(j + a, 0)] + '%';
	}
	if(j == 0){
		if(i==0){left = '0'}
		else {left = lefPositionPull[a] + '%';}
	}
	if(j > 0){
		let c = lefPositionPull.length - 1;
		left = lefPositionPull[Math.min(a + j, c)] + '%';
	}
	if(i==0){left = '0'}
	item.style.left = left;
}

function checkItem(){

}
