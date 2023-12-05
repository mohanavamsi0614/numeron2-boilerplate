// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
let score=0
let c=0
function main() {
// if (c==5||score==5){
//     location.replace("./gameover.html")
// }
let sec=20
let counter=()=>{
    
    document.getElementById("timer").innerHTML=sec
    if (sec<=0){
        location.replace("./gameover.html")
    }
    sec--
}
d=setInterval(counter,1000);
let num1=Math.ceil(Math.random()*100)+1
let num2=Math.ceil(Math.random()*100)+1
oper=["*","+","-","/","%"]
let op=oper[Math.ceil(Math.random()*4,2)]
let ans=Math.round(eval(num1+op+num2))
const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
const answer=document.getElementById("number3")
number1.innerHTML=num1
number2.innerHTML=num2
answer.innerHTML=ans
const add=document.getElementById("plus")
const sub=document.getElementById("minus")
const mul=document.getElementById("mul")
const div=document.getElementById("divide")
const mod=document.getElementById("modulus")
add.onclick=()=>{game("+")}
sub.onclick=()=>{game("-")}
mul.onclick=()=>{game("*")}
div.onclick=()=>{game("/")}
mod.onclick=()=>{game("%")}
function game(i){
    if (eval(num1+i+num2)==ans){
        score++
        clearInterval(d)

        main()
        
    }
    else{
        location.replace("./gameover.html")
    }
    c++
    localStorage.setItem("scores",score)
}
    
}
main()