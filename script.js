//GLOBAL VARIABLES
const container = document.querySelector('#container');
let size =0;

//function sizeButton will listen for a click on the button. will clear the grid then ask for a prompt for the size of the grid.
//once completed you can then hover to change the color of the boxes.
function sizeButton(){
    gridSize.addEventListener('click', ()=>{
        var gridPixels = container.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
        let size = prompt("Please enter the size of the grid you would like.");
        setupBox(size);
        hoverChange()
    })
}

//this function will allow the user to clear the grid.
function clearButton(){
    clear.addEventListener('click',()=>{
        var gridPixels = container.querySelectorAll('div');
        gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');    })
}
//this function will let the user "erase" with the same method as hoverChange but in white.
function eraserButton(){
    eraser.addEventListener('click', ()=>{
        erase = "white";
        container.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = erase;
    })
    })

}
//this function will take the size given and create the boxes for the grid.
function setupBox(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let area = size * size;
    for(let i = 0;i<area;i++)
    {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    }
    hoverChange();

}
//hoverChange will change the color of the box
//on hover.
  function hoverChange(){
    color = "gray";
    container.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = color;
    })
}

//call functions.
setupBox(16);
sizeButton();
clearButton();
eraserButton();


