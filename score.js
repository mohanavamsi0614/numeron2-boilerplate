// Iteration 8: Making scoreboard functional
const again=document.getElementById("play-again-button")
again.addEventListener("click",()=>{
    location.replace("./game.html")
})
const score=document.getElementById("score-board")
score.innerHTML=localStorage.getItem("scores")
console.log(localStorage.getItem("scores"))