const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");
const carousel = document.getElementById("carousel");

const SLIDES_COUNT = slides.length;

let current_slide=0;

left.addEventListener("click",()=>{
    current_slide--;
    if(current_slide < 0)
    current_slide=SLIDES_COUNT-1;

    updateCarousel();
});

right.addEventListener("click",()=>{
    current_slide++;
    if(current_slide == SLIDES_COUNT)
    current_slide=0;

    updateCarousel();
});


function updateCarousel(){
    carousel.style.transform = `translateX(${-current_slide*slides[0].offsetWidth}px)`;
    document.body.style.backgroundColor = slides[current_slide].attributes["data-bg"].value;
    // console.log(slides[current_slide].attributes["data-bg"]);
}