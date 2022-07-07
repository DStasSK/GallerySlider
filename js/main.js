const gallery = document.querySelector('.gallery');
const galleryShadow = document.querySelector('.galleryShadow');

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



// стартовая генерация галереи
for(let i = 0; i < galleryItemPull; i++){
	let div = document.createElement('div');
	setLeftPosition(div, i, checkedIndex);
	div.style.backgroundColor = backgroundColor[i];
	gallery.appendChild(div);
	galleryShadow.appendChild(div.cloneNode(true));
}



function setLeftPosition(item, i, checkedIndex){
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

	//fix for width
	if((left=='10%')&&(galleryItemPull-1==i)){item.style.width='90%'}
	if(i==0){item.style.width='90%';}
	if(galleryItemPull==1){item.style.width='100%'; left=0}

	item.style.left = left;
}



gallery.addEventListener('click', checkItem);
gallery.addEventListener('onfocus', checkItem);
function checkItem(e){
	let gallery = document.querySelector('.gallery');
	let gallery_items = gallery.children;
	let galleryShadow = document.querySelector('.galleryShadow');
	let galleryShadow_items = galleryShadow.children;

	// определение номера элемента, который активировал событие
	let j=0;
	for (let i of gallery_items) {
		if(e.target == i){break}
		j++;
	}
	let checkedIndex = j;

	// установка нового положения элементов слайдера
	for(let i = 0; i < galleryItemPull; i++){
		setLeftPosition(gallery_items[i], i, checkedIndex);
		setLeftPosition(galleryShadow_items[i], i, checkedIndex);
	}
}
