const container = document.querySelector(".container");

if (container) {
    for (let i = 0; i <= 16; i++) {
        var column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        if (column) {
            for (let i = 0; i <= 16; i++) {
                var pixel = document.createElement("div");
                pixel.classList.add("pixel");
                column.appendChild(pixel);
            }
        }
    }
}

const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener("mousemove", () => {
        pixel.classList.add("colored");
    });
})