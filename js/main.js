let gallery = document.querySelector('.gallery');
let galleryShadow = document.querySelector('.galleryShadow');
let galleryItemPull = 20;

const backgroundColor = [
	'#EFE45B', '#FFF8A6', '#FFF681', '#DDD13C', '#C7BB1C',
	'#3EA478', '#86CEAF', '#5CB690', '#299768', '#138956',
	'#EF855B', '#FFC0A6', '#FFA581', '#DD693C', '#C74D1C',
	'#7146A2', '#AA8BCC', '#8962B4', '#603195', '#4E1C87'
];
const backgroundURL = [];

// left position at %
if(galleryItemPull>4) {let lefPositionPull = [0, 2, 5, 10, 90, 95, 98, 100];}
if(galleryItemPull==4){let lefPositionPull = [0, 2, 5, 10, 90, 95, 98];}
if(galleryItemPull==3){let lefPositionPull = [0, 5, 10, 90, 95];}
if(galleryItemPull<=2){let lefPositionPull = [0, 10, 90];}

// random start
let checkedIndex = Math.round(Math.random()*galleryItemPull);
// let checkedIndex = 0;
// console.log(checkedIndex);

for(let i=0; i < galleryItemPull; i++){
	let div = document.createElement('div');
	setLeftPosition(div);
	div.style.backgroundColor = backgroundColor[i];
	gallery.appendChild(div);
}

function setLeftPosition(item){
	let left = '10%';
	// if(i<checkedIndex){}
	item.style.left=left;
}

function checkItem(){

}
