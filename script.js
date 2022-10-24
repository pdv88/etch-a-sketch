var color = 'black'

let slider = document.getElementById("myRange")
slider.addEventListener("change", newValue)
let res = slider.value
let sliderText = document.getElementById("sliderText")

function newValue(){
    res = slider.value
    let grid = document.querySelector('#grid')
    let cells = grid.querySelectorAll('div')
    cells.forEach((div) => div.style.backgroundColor = 'white')
    makeGrid(res)
    sliderText.textContent = `Resolution ${res}px`
}

function makeGrid(res) {
    let grid = document.querySelector('#grid')
    grid.style.gridTemplateColumns = `repeat(${res}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${res}, 1fr)`
    sliderText.textContent = `Resolution ${res}px`

    
    
    for (let i = (res * res); i > 0; i--){
        let cell = document.createElement("div")
        cell.addEventListener("mousedown", paint)
        cell.style.backgroundColor = 'white'
        grid.insertAdjacentElement("beforeend", cell)
    } 
}

makeGrid(res)

function paint(){
    if(color === 'rainbow'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color
    }

}

function changeColor(choice) {
    color = choice
}

function reset(){
    let grid = document.querySelector('#grid')
    let cells = grid.querySelectorAll('div')
    cells.forEach((div) => div.style.backgroundColor = 'white') 
}
