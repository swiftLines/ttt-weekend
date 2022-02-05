/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let gameStatus, boardArr = [], turn, winner


/*------------------------ Cached Element References ------------------------*/
const divs = document.querySelectorAll('div')
const messageEl = document.querySelector('#message')
//Store the element that displays the game status on the page

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    boardArr.forEach(function(elmnt) {
        elmnt.push(1)
        //console.log(elmnt)
    })
    console.log(boardArr)
}
