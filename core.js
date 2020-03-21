//Select DOM elements
const praimeryCatImage = document.querySelector('#displayedCatImage');
const displayedCatName = document.querySelector('#displayedCatName');
const changeCatButton = document.querySelector('#changeCatButton');
const clickedNum = document.querySelector('#clickedNum');

//Array contains cats info
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

//Set default index of cats
let currentCat = 0;

//Update DOM elements
function init(){
    praimeryCatImage.setAttribute('src',cats[currentCat].pictureSRC);
    displayedCatName.innerHTML = cats[currentCat].name;
    clickedNum.innerHTML = cats[currentCat].clickNumber;
}

//Set default cat when window loaded
window.onload = init();

//Count clickes and update cat object
praimeryCatImage.addEventListener('click',() =>{
    parseInt(clickedNum.innerHTML,10);
    console.log(clickedNum.innerHTML++);
    clickedNum.textContent = clickedNum.innerHTML;
    cats[currentCat].clickNumber = clickedNum.innerHTML;
    console.log(cats[currentCat]);
});

//Change cats
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