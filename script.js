function removeGrid() {
    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.remove();
    })

    let columns = document.querySelectorAll(".column");

    columns.forEach((column) => {
        column.remove();
    })
}

function createGrid(squares) {
    if (container) {
        for (let i = 0; i <= squares; i++) {
            var column = document.createElement("div");
            column.classList.add("column");
            container.appendChild(column);
            if (column) {
                for (let i = 0; i <= squares; i++) {
                    var pixel = document.createElement("div");
                    pixel.classList.add("pixel");
                    column.appendChild(pixel);
                }
            }
        }
    }
}

function getRandomColorRGB(max) {
    let R = Math.floor(Math.random() * max);
    let G = Math.floor(Math.random() * max);
    let B = Math.floor(Math.random() * max);
    return `rgb(${R} ${G} ${B})`;
}

const container = document.querySelector(".container");

// create 16x16 grid
createGrid(16);

// trailing feature

let pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        let RGB = getRandomColorRGB(255);
        pixel.style.background = RGB;
    });
})

// select squares per side

const changer = document.querySelector("#changer");

let squares;

changer.addEventListener("click", () => {
    squares = prompt("Enter the number of squares per side");
    if (squares == null || squares == "" || isNaN(squares)) {
        squares = 16;
    } else {
        squares = parseInt(squares);
    }

    removeGrid();
    createGrid(squares);

    let pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            let RGB = getRandomColorRGB(255);
            pixel.style.background = RGB;
        });
    })
})