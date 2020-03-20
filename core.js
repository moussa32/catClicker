const praimeryCatImage = document.querySelector('#displayedCatImage');
const displayedCatName = document.querySelector('#displayedCatName');
const changeCatButton = document.querySelector('#changeCatButton');
const clickedNum = document.querySelector('#clickedNum');

let cats = {
    cat1:{
        id:0,
        name:'Napalm',
        pictureSRC:'images/cat1.jpg',
        clickNumber:0
    },
    cat2:{
        id:1,
        name:'McBurpyTuna',
        pictureSRC:'images/cat2.jpg',
        clickNumber:0
    }
}

window.onload = function(){
    praimeryCatImage.src = cats.cat1.pictureSRC;
    displayedCatName.innerHTML = cats.cat1.name;
    clickedNum.innerHTML = cats.cat1.clickNumber;
}
function toggleCats(){
    if(displayedCatName.innerHTML == cats.cat1.name){
        praimeryCatImage.src = cats.cat2.pictureSRC;
        displayedCatName.innerHTML = cats.cat2.name;
        clickedNum.innerHTML = cats.cat2.clickNumber;
    }else{
        praimeryCatImage.src = cats.cat1.pictureSRC;
        displayedCatName.innerHTML = cats.cat1.name;
        clickedNum.innerHTML = cats.cat1.clickNumber;
    }
}

praimeryCatImage.addEventListener('click',() =>{
    parseInt(clickedNum.innerHTML,10);
    console.log(clickedNum.innerHTML++);
    clickedNum.textContent = clickedNum.innerHTML;
});

changeCatButton.addEventListener('click',toggleCats);
