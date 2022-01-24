let count=0;
addBox();

function addBox(){
    for(let i=0;i<65;i++){
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    const container = document.querySelector(".container");
    container.appendChild(divEl);
    }
    bgAnimation();
}

function bgAnimation(){
    if(count%2==0)
    document.querySelector("body").style.backgroundColor = "black";
    else{
    // clearTimeout(time_two);
    document.querySelector("body").style.backgroundColor = "white";
    }
    count++;
    count %= 2;

    const time_two = setTimeout(bgAnimation,2000);
}