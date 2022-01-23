addBox();


function addBox(){
    for(let i=0;i<65;i++){
    const divEl = document.createElement("div");
    divEl.classList.add("box");
    const container = document.querySelector(".container");
    container.appendChild(divEl);
    }
}