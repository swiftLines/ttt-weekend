/*-------------------------------- Constants --------------------------------*/
//Define the 8 possible winning combinations as an array of arrays.
const winningCombos = [
  [0, 3, 6],
  [0, 4, 8],
  [0, 1, 2],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

/*---------------------------- Variables (state) ----------------------------*/
let boardArr = [], turn, winner

/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll('div')
let messageEl = document.querySelector('#message')
const replay = document.querySelector('button')

/*----------------------------- Event Listeners -----------------------------*/
//app should wait for the user to click a square and call a handleClick function
squares.forEach(function(square) {
    square.addEventListener('click', handleClick)
})

// handleClick('click', 'div', evt => { 
  //console.log(squares.id)
// })

replay.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()
//initialize function should initialize the state variables
function init() {
    //Initialize the board array to 9 nulls to represent empty squares
    for (let i = 0; i < 9; i++) {
        boardArr[i] = null
    } 
    //Initial message
    // messageEl.innerText = `Click a Square to Start`
    //Replay button style
    //
    //Initialize whose turn it is to 1 (player 'X')
    turn = 1
    //Initialize the winner variable to null
    winner = null
    //Render those state variables to the page by calling a render function
    render()
}//end init()

function render() {
  //Loop over the board array (which represents the squares on the page) for each iteration:
    boardArr.forEach(function (square, index) {      
      let mark

        if(square === 1){
          mark = `X`
        } else if (square === -1) {
          mark = `O`
        } else {
          mark = null
        }
        
      squares[index].innerText = mark
    })//end boardArr.forEach
    
  //Render a message reflecting the current game state:
    let message

    if (winner === null) {
      
      if(turn === 1) {
        message = `player X's turn`
      } else {
        message = `player O's turn`
      }
      messageEl.innerText = `Game in progress, ${message}!`
    } else if (winner === `T`) {
      messageEl.innerText =  `Cat's Game (Tie)`
    } else if (winner !== null) {
      
      if(winner === 1) {
        message = `X wins`
      } else {
        message = `O wins`
      }
      messageEl.innerText =  `Player ${message}! Congratulations!`
    }//end if
    
}//end render()


//Next, the app should wait for the user to click a square and call a handleClick function
function handleClick(evt) {//(type, selector, callback) {
  //obtain the index of the square that was clicked 

    let squareId = parseInt(evt.target.id)
    if(winner !== null) {
      return
    }
      // document.addEventListener(type,evt => {
      //   if(evt.target.matches(selector)) console.dir(selector.id)//callback(evt)
      // })
  
    if (boardArr[squareId]) {
      messageEl.innerText = `Square is already taken...`
      return
    } else if (winner !== null) {
      messageEl.innerText = `Game is over...`
      return
    }
  
    //Update the board array at the index with the value of turn
    boardArr[squareId] = turn
    //Set the winner variable if there's a winner by calling a new function: getWinner
    winner = getWinner()
    //Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa)
    turn *= -1
    
    render()
}//end handleClick()

//check for winner
function getWinner() {
 
  let winner = null
  winningCombos.forEach(function(arr) {
    let myVar = Math.abs(boardArr[arr[0]] + boardArr[arr[1]] + boardArr[arr[2]])
    console.log()
      if (myVar === 3){
        console.log(`It works!!!`)
        winner = turn
        return
      }
  })
    if(winner !== null) {
      return winner
    }
  //Next, If there's no winner, check if there's a tie
  if (boardArr.includes(null)) {
    return null
  } else {
    return "T"
  }
  
  render()
}// end getWinner()
