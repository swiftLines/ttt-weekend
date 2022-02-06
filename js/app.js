/*-------------------------------- Constants --------------------------------*/
//Define the 8 possible winning combinations as an array of arrays.
// Each array will contain three indexes of the board that make a winner if they hold the same player value
const winningCombos = []


/*---------------------------- Variables (state) ----------------------------*/
let boardArr, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll('div')
let messageEl = document.querySelector('#message')
//Store the element that displays the game status on the page

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
//initialize function should initialize the state variables
function init() {
    //Initialize the board array to 9 nulls to represent empty squares


    //Initialize whose turn it is to 1 (player 'X')

    //Initialize the winner variable to null

    //Render those state variables to the page by calling a render function
}

function render() {
  //Loop over the board array (which represents the squares on the page)

  //Render a message reflecting the current game state:

  //call handleClick function?
}
//After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page

//Next, the app should wait for the user to click a square and call a handleClick function
function handleClick() {
  //obtain the index of the square that was clicked

  //If the board has a value at the index, immediately return because that square is already taken

  //If winner is not null, immediately return because the game is over
  
  //Update the board array at the index with the value of turn

  //Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa)

  //Set the winner variable if there's a winner by calling a new function: getWinner


}

function getWinner() {
  //check for winner
  //Loop through the each of the winning combination arrays defined
  //Total up the three board positions using the three indexes in the current combo
  //Convert the total to an absolute value (convert any negative total to positive)
  //If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value
  
  //Next, If there's no winner, check if there's a tie
  //Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T"

  //Otherwise return null.

  //all state has been updated, so render the state to the page (step 3.3).
}

