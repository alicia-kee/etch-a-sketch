const grid = document.querySelector(".grid-container");
let currSize = 30; //for now

function createGrid(size){ //size is width/height of each box
    if(size>100){
        size = 100; //default max size
    }
    grid.innerHTML = ""; //clear grid
    const padding = ((500/size)/2) - 0.5;
    //500 is height and width of container, later create var. 
    //0.5 is border of each box

    const paddingStr = padding + "px";

    for (let i=0; i<size; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add("row-container"); //each newDiv created has this class
        grid.appendChild(rowContainer);

        for (let j=0; j<size; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-square");
            gridElement.style.padding = paddingStr;
            gridElement.addEventListener("mouseover", ()=>{gridElement.style.backgroundColor="black"});
            rowContainer.appendChild(gridElement);
        }
    }
}

function clearGrid(){
    const gridBoxes = document.querySelectorAll(".grid-square");
    gridBoxes.forEach((box) => {box.style.backgroundColor = "white";});
}

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearGrid)

createGrid(currSize);