let gameButtons = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let turn = 'x';
let winnerShow = document.querySelector(".winnerShow");
let leftFill = document.querySelector("#leftFill");
let rightFill = document.querySelector("#rightFill");
leftFill.innerText = "Your Turn";
let count = 0;
gameButtons.forEach(
    (button)=>{
        button.onclick = ()=>{
            if(turn === 'x'){
                button.style.color = "red";
                button.innerText = "x";
                leftFill.innerText = "";
                turn = "o";
                rightFill.innerText="Your Turn";
            }
            else{
                button.innerText = "o";
                rightFill.innerText="";
                turn = "x";
                leftFill.innerText = "Your Turn";
                
            }
            count++;
            winningGame();
            button.disabled = true;
        }
    }
);
// Winning patterns
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function winningGame(){
winningPattern.forEach(
    (array)=>{
        if(gameButtons[array[0]].innerText != "" && gameButtons[array[1]].innerText != "" && gameButtons[array[2]].innerText != ""){
            if(gameButtons[array[0]].innerText == gameButtons[array[1]].innerText &&  gameButtons[array[1]].innerText == gameButtons[array[2]].innerText){
                // console.log("winner is player ",gameButtons[array[0]].innerText);
                winnerPrint(gameButtons[array[0]].innerText);
                disableButtons();
        }
        else if(count == 9){
                leftFill.innerText="";
                rightFill.innerText="";
                winnerShow.innerText = `Game is Tie`;
                winnerShow.style.visibility = "visible";
        }
    }
    }
)};
function disableButtons(){
    gameButtons.forEach((button)=>{button.disabled = true;})
};

function winnerPrint(winnerName){
    leftFill.innerText="";
    rightFill.innerText="";
    winnerShow.innerText = `The Winner is ${winnerName}`;
    winnerShow.style.visibility = "visible";

}
resetButton.onclick = ()=>{
    
    gameButtons.forEach((button)=>{
        button.innerText = '';
        button.disabled = false;
    })
    winnerShow.style.visibility = "hidden";
    turn = 'x';
    leftFill.innerText="Your Turn";
    rightFill.innerText="";
}