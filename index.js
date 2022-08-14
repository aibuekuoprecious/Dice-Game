let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function display(){ 
    rollBtn.style.display= "none"
    resetBtn.style.display= "block"}
    
 rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1

     if (player1Turn) {
        player1Score += randomNumber
        player1Dice.textContent= randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `Player 2 turn`
     } else {
        player2Score += randomNumber
        player2Dice.textContent= randomNumber
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        message.textContent = `Player 1 turn`
        player2Scoreboard.textContent = player2Score
     }
     if (player1Score >=20){
         message.textContent= "Player 2 Won"
         display()}
 else if (player2Score >= 20) {
     message.textContent= "Player 2 Won"
     display()}
     player1Turn = !player1Turn
 })
 resetBtn.addEventListener("click", reset)
 function reset(){
     message.textContent = `Player 1 turn`
     let player1Score = 0
     let player2Score = 0
     let player1Turn = true
     player1Dice.textContent = '-'
     player2Dice.textContent = '-'
     player1Scoreboard.textContent = 0
     player2Scoreboard.textContent = 0
     resetBtn.style.display = "none"
     rollBtn.style.display = "block"
     }
     reset()
     
     