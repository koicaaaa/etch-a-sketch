const container = document.querySelector(".gridContainer");

function createGrid(input) {
    for (i = 0; i < input * input; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";

        grid.style.width = `${624 / input}px`;
        grid.style.height = `${624 / input}px`;
        container.appendChild(grid);
    }
}

createGrid(16);