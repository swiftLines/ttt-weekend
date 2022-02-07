/*-------------------------------- Constants --------------------------------*/
//Define the 8 possible winning combinations as an array of arrays.
// Each array will contain three indexes of the board that make a winner if they hold the same player value
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
//Store the element that displays the game status on the page

/*----------------------------- Event Listeners -----------------------------*/
//app should wait for the user to click a square and call a handleClick function
squares.forEach(function(square) {
    square.addEventListener('click', handleClick)
})

//s handleClick('click', 'div', evt => { 
  //console.log(squares.id)
// })

/*-------------------------------- Functions --------------------------------*/
init()
//initialize function should initialize the state variables
function init() {
    //Initialize the board array to 9 nulls to represent empty squares
    for (let i = 0; i < 9; i++) {
        boardArr[i] = null
    } //may need to MAP instead or MAP later!!!!!!!!!!
    //boardArr[1]= -1 // TEST Success!

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
    //Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
    //Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)  
      
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
    //If winner has a value other than null (game still in progress), render whose turn it is
    //If winner is equal to 'T' (tie), render a tie message
    //Otherwise, render a congratulatory message to which player has won

    if (winner === null) {
      messageEl.innerText = `Game still in progress`
      if(turn === 1) {
        `Player X's turn`
      } else {
        `Player O's turn`
      }
    } else if (winner === `T`) {
      messageEl.innerText =  `Cat's Game (Tie)`
    } else if (winner !== null) {
      messageEl.innerText =  `Congratulations! Player `
      if(turn === 1) {
        `X wins!`
      } else {
        `O wins!`
      }
    }//end if
    
}//end render()


//Next, the app should wait for the user to click a square and call a handleClick function
function handleClick(evt) {//(type, selector, callback) {
  //obtain the index of the square that was clicked by :
    //extracting" the index from an id assigned to the element in the HTML
      // Hint: Each id seems to correspond with an index in our board array. How could these be used if we cleaned them up a bit?

    let squareId = parseInt(evt.target.id)
  //console.log(squareId) 

      // document.addEventListener(type,evt => {
      //   if(evt.target.matches(selector)) console.dir(selector.id)//callback(evt)
      // })
  
    //If the board has a value at the index, immediately return because that square is already taken
    //If winner is not null, immediately return because the game is over
    if (boardArr[squareId]) {
      messageEl.innerText = `Square is already taken...`
      return
    } else if (winner !== null) {
      messageEl.innerText = `Game is over...`
      return
    }
  
    //Update the board array at the index with the value of turn
    boardArr[squareId] = turn
    //Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa)
    turn *= -1
    //Set the winner variable if there's a winner by calling a new function: getWinner
    winner = getWinner()

    render()
}//end handleClick()

//check for winner
function getWinner() {
  // 1) Loop through the each of the winning combination arrays defined
  winningCombos.forEach(function(arr) {
      if (Math.abs(boardArr[arr[0]] + boardArr[arr[1]] + boardArr[arr[2]] === 3)) {
        console.log(`It works!!!`)
        return boardArr[arr[0]]
      }
  })
  // 2) Total up the three board positions using the three indexes in the current combo
  // 3) Convert the total to an absolute value (convert any negative total to positive)
  // 4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value
  
  //Next, If there's no winner, check if there's a tie
  //Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T"
  //Otherwise return null.
  if (boardArr.includes(null)) {
    return null
  } else {
    return "T"
  }
  
}// end getWinner()
