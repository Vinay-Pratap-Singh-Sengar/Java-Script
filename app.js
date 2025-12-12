let colors = ["red", "blue", "yellow", "orange","green","purple","pink"];
let button = document.getElementById("btn")

button.addEventListener("click", changeColor)
let text = document.getElementById("txt")

function changeColor(){
    let i = randomNumber();
    document.body.style.backgroundColor = colors[i]
    text.textContent = colors[i]
    console.log(i)
} 
function randomNumber (){
    return Math.floor(Math.random()*colors.length)
}

