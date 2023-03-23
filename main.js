const sliderBox = document.querySelector(".slider-box");
const slides = document.querySelectorAll(".slide");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const mobileUl = document.querySelector('.mobile-ul');
const mobileLi = document.querySelectorAll('.li-box a');
const mobileLiImg = document.querySelectorAll('.mobile-ul .li-box .right');
const mobileSlide = document.querySelector('.mobile-slide');
const mobileSlideInspired = document.querySelector('.mobile-slide-inspired');
const imgBox = document.querySelectorAll('.img-box');
const imgBoxInspired = document.querySelectorAll('.img-box-inspired');
const dots = document.querySelectorAll('.dot');
const dotsInspired = document.querySelectorAll('.dot-inspired');
const textInfoPara = document.querySelectorAll('.text-info-para p');
const showPara = document.querySelector('.show-para');
const showParaBox = document.querySelector('.show-para-box')
const getInspiredText = document.querySelectorAll('.getinspired-text p');
const showTextInspired = document.querySelector('.show-text-inspired');

hamburger.addEventListener("click", function(){
menu.style.display="block";
});

close.addEventListener("click", function(){
    menu.style.display="none";
    });




let num = 0;

function move(){
    sliderBox.style.transform = `translateX(-${num * 100}%)`;
    // console.log(num);
    if (num > 0) {
        num = -1; 
     }
    num++;
}
move();
setInterval(move, 4000);


// MOBILE
function showRight(){
    mobileLiImg.forEach((e,i)=>{
        e.style.display = 'none';
            })
}

      
mobileLi.forEach((e,i)=>{

e.addEventListener('click', (e,i)=>{
showRight();
const liBox = e.target.closest('.li-box')
 liBox.children[0].style.display = 'block';
                })
})
function opacityText(num){
    showPara.classList.remove('animate');
    showPara.innerText = textInfoPara[num].innerText;
    showPara.classList.add('animate');
}
function opacityTextInspired(num){
    showTextInspired.classList.remove('animate');
    showTextInspired.innerText = getInspiredText[num].innerText;
    showTextInspired.classList.add('animate');
}

let counter = 0;
function mobileMoveSlide(){
 mobileSlide.style.transform = `translateX(-${counter * 100}%)`;
    dots.forEach(dot=>{
        dot.style.background =  'rgba(0, 0, 0, .2)';
    });
    opacityText(counter)

    dots[counter].style.background = 'rgba(0, 0, 0, .7)';
    if (counter  >= imgBox.length -1) {
        counter = -1; 
     }

    counter++;
 

}
mobileMoveSlide();

const slideInterval = setInterval(mobileMoveSlide, 4000);


let countInspired = 0;
function mobileMoveSlideInspired(){
    mobileSlideInspired.style.transform = `translateX(-${countInspired * 100}%)`;
    dotsInspired.forEach(dot=>{
        dot.style.background =  'rgba(0, 0, 0, .2)';
    });
    opacityTextInspired(countInspired)
    dotsInspired[countInspired].style.background = 'rgba(0, 0, 0, .7)';
    if (countInspired  >= imgBoxInspired.length -1) {
        countInspired = -1; 
     }
     countInspired++;
}
mobileMoveSlideInspired();

const slideInspired = setInterval(mobileMoveSlideInspired, 4000);







