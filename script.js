//Getting container for grid from document and running makeRows function with default size when page loads
const container = document.querySelector(".container") 
window.onload = makeRows(16, 16)

//Function that makes grid and adds color change event to every grid-item
function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-cols", cols)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div")
        container.appendChild(cell).className = "grid-item"
        cell.addEventListener("mouseenter", function(){
            this.style.backgroundColor = "black"
        })
    }
}
// When sizeButton is clicked, all grid-items go back to white backgroundcolor and grid gets new size with getSize function
let sizeButton = document.getElementById("size-button")
sizeButton.addEventListener("click", function(){
    container.innerHTML = ""
    getSize() 
})
//Function asks user input for next gridsize and makes new grid using that value
function getSize(){
    let input = prompt("Give new number for grid size(16-100)")
    if (input < 16 || input > 100){
        alert("Number too big or too low! Enter new number between 16 and 100")
    }
    makeRows(input, input)
}
