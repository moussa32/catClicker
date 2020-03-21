const praimeryCatImage = document.querySelector('#displayedCatImage');
const displayedCatName = document.querySelector('#displayedCatName');
const changeCatButton = document.querySelector('#changeCatButton');
const clickedNum = document.querySelector('#clickedNum');

let cats = [
    {
        id:0,
        name:'Napalm',
        pictureSRC:'images/cat1.jpg',
        clickNumber:0
    },
    {
        id:1,
        name:'McBurpyTuna',
        pictureSRC:'images/cat2.jpg',
        clickNumber:0
    },{
        id:2,
        name:'Oliver',
        pictureSRC:'images/cat3.jpg',
        clickNumber:0
    },{
        id:3,
        name:'Leo',
        pictureSRC:'images/cat4.jpg',
        clickNumber:0
    },{
        id:4,
        name:'Max',
        pictureSRC:'images/cat5.jpg',
        clickNumber:0
    }
]

let currentCat = 0;

function init(){
    praimeryCatImage.setAttribute('src',cats[currentCat].pictureSRC);
    displayedCatName.innerHTML = cats[currentCat].name;
    clickedNum.innerHTML = cats[currentCat].clickNumber;
}

window.onload = init();

praimeryCatImage.addEventListener('click',() =>{
    parseInt(clickedNum.innerHTML,10);
    console.log(clickedNum.innerHTML++);
    clickedNum.textContent = clickedNum.innerHTML;
});

changeCatButton.addEventListener('click',() =>{
    if(currentCat < cats.length){
        currentCat += 1;
        console.log(currentCat);
        if(currentCat == cats.length){
            currentCat = 0;
            init();
        }
        init();
    }
});