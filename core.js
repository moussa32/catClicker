const praimeryCatImage = document.querySelector('#displayedCatImage');
const clickedNum = document.querySelector('#clickedNum');

praimeryCatImage.addEventListener('click',() =>{
    parseInt(clickedNum.innerHTML,10);
    console.log(clickedNum.innerHTML++);
    clickedNum.textContent = clickedNum.innerHTML;
});