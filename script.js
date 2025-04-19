const DEFAULT_COLOR = "#000000";

let currentColor = DEFAULT_COLOR;

const container = document.querySelector(".gridContainer");
const resize = document.querySelector("#resize");
const colorPicker = document.querySelector("#color");
const rainbow = document.querySelector("#rainbow");
const opacity = document.querySelector("#opacity");
const erase = document.querySelector("#erase");
const reset = document.querySelector("#reset");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

reset.addEventListener("click", resetGrid);
colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function createGrid(input) {
    for (i = 0; i < input * input; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";

        grid.style.width = `${624 / input}px`;
        grid.style.height = `${624 / input}px`;
        container.appendChild(grid);
    }
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", colorGrid));
}

function colorGrid(e) {
    if (e.type === 'mouseover' && !mouseDown) {return}
    else {
    this.style.backgroundColor = currentColor; }
}

function resetGrid() {
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(element => {
        element.style.backgroundColor = "#FFFFFF";
    })
}




createGrid(16);