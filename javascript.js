const grid = document.querySelector(".grid-container");
let currSize = 10; //for now

function createGrid(size){
    grid.innerHTML = ""; //clear grid
    const padding = (500/size)/2; //500 is height and width of container, later create var. 
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

createGrid(currSize);