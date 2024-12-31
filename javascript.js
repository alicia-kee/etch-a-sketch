const grid = document.querySelector(".grid-container");
let currSize = 20; //default
let colour = "black"; //default

function createGrid(){ //size is width/height of each box
    if(currSize>100){
        currSize = 100; //default max size
    }

    sizeText.textContent = currSize + " x " + currSize;

    grid.innerHTML = ""; //clear grid
    const padding = ((500/currSize)/2) - 0.5;
    //500 is height and width of container, later create var. 
    //0.5 is border of each box

    const paddingStr = padding + "px";

    for (let i=0; i<currSize; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.add("row-container"); //each newDiv created has this class
        grid.appendChild(rowContainer);

        for (let j=0; j<currSize; j++){
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-square");
            gridElement.style.padding = paddingStr;
            gridElement.addEventListener("mouseover", ()=>{gridElement.style.backgroundColor=colour});
            rowContainer.appendChild(gridElement);
        }
    }
}

function clearGrid(){
    const gridBoxes = document.querySelectorAll(".grid-square");
    gridBoxes.forEach((box) => {box.style.backgroundColor = "white";});
}

function changeColour(){
    colour = document.querySelector(".pencolour-box").value;
}

function switchToEraser(){
    colour = "white";
    eraserBtn.style.color = "#5e5e5e";
    eraserBtn.style.backgroundColor = "#CF9FFF";

    colourBtn.style.color = "#CF9FFF";
    colourBtn.style.backgroundColor = "#5e5e5e";
}

function switchToColour(){
    changeColour();

    colourBtn.style.color = "#5e5e5e";
    colourBtn.style.backgroundColor = "#CF9FFF";

    eraserBtn.style.color = "#CF9FFF";
    eraserBtn.style.backgroundColor = "#5e5e5e";
}

function changeSize(){
    currSize = sizePicker.value;
    createGrid();


}

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearGrid)

const colourPicker = document.querySelector(".pencolour-box");
colourPicker.addEventListener("input", changeColour);

const eraserBtn = document.querySelector(".eraser-btn");
eraserBtn.addEventListener("click", switchToEraser);

const colourBtn = document.querySelector(".colour-btn");
colourBtn.addEventListener("click", switchToColour);

const sizePicker = document.querySelector(".slider");
sizePicker.addEventListener("input", changeSize);
const sizeText = document.querySelector(".slider-value");

createGrid(currSize);