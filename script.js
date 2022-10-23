let color = 'black'

function makeGrid(res) {
    let grid = document.querySelector('#grid')
    grid.style.gridTemplateColumns = `repeat(${res}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${res}, 1fr)`
    let cell = document.querySelectorAll("#cell")

    for (let i = (res * res); i > 0; i--){
        let col = document.createElement('div')
        col.addEventListener("mouseover", paint)
        col.classList.add("cell", "col")
        grid.insertAdjacentElement("beforeend", col)
    } 
}

makeGrid(50)

function paint(color){
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
    makeGrid(50)
}
