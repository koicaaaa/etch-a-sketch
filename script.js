const DEFAULT_COLOR = "#000000";
const DEFAULT_MODE = "color";
const DEFAULT_SIZE = "16";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector(".gridContainer");
const resize = document.querySelector("#resize");
const colorPicker = document.querySelector("#color");
const rainbow = document.querySelector("#rainbow");
const erase = document.querySelector("#erase");
const reset = document.querySelector("#reset");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

reset.addEventListener("click", resetGrid);
resize.addEventListener("click", setSize);
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorPicker.addEventListener("click", () => setCurrentMode("color"));
rainbow.addEventListener("click", () => {
    setCurrentMode("rainbow"); });
erase.addEventListener("click", () => {
    setCurrentMode("erase"); });

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function setSize() {
    let newSize = prompt("What size? ");
    setCurrentSize(newSize);
    reloadGrid();
}

function reloadGrid() {
    clearGrid();
    createGrid(currentSize);
}

function clearGrid() {
    container.innerHTML = "";
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
    if (e.type === "mouseover" && !mouseDown) {
        return
    }
    if (currentMode === "rainbow") {
        const num1 = Math.floor(Math.random() * 256);
        const num2 = Math.floor(Math.random() * 256);
        const num3 = Math.floor(Math.random() * 256);

        currentColor = `rgba(${num1}, ${num2}, ${num3})`;
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === "erase") {
        e.target.style.backgroundColor = "#FFFFFF";
    }
    else if (currentMode === "color") {
        e.target.style.backgroundColor = currentColor;
    }
}

function resetGrid() {
    let gridPixels = container.querySelectorAll("div");
    gridPixels.forEach(element => {
        element.style.backgroundColor = "#FFFFFF";
    })
}


window.onload = () => {
    createGrid(16);
}