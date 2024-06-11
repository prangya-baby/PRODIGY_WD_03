let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgCointainer = document.querySelector(".msgCointainer");
let msg = document.querySelector("#msg");

  

let turn0=true;  //playerX, player0
let count=0;     //draw


const winningTruns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],   
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enabledBoxes();  
    msgCointainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if (turn0){  //playerO
        box.innerText="O";
        turn0 = false;
        } else{   //playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
         count++;


       let isWinner = checkWinner();

       if (count === 9 && !isWinner){
        gameDraw();
       }
    });
});



const gameDraw = () =>{
    msg.innerText =`Game was Draw`;
    msgCointainer.classList.remove("hide");
    disabledBoxes();
};


const disabledBoxes = () => {
    for(let box of boxes){
         box.disabled = true;
    }
};


const enabledBoxes = () => {
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
};


const showWinner = (winner)=>{
msg.innerText=`Congrats,Winner is ${winner}`;
msgCointainer.classList.remove("hide");
disabledBoxes();
};



const checkWinner = () => {
    for (let turn of winningTruns){
    let turnVal1=boxes[turn[0]].innerText;
    let turnVal2=boxes[turn[1]].innerText;
    let turnVal3=boxes[turn[2]].innerText;

    if(turnVal1 !="" && turnVal2 !="" && turnVal3 !="") {
        if(turnVal1 === turnVal2 && turnVal2 === turnVal3){
            showWinner(turnVal1);
            return true;
        }
    }
    } 
};
newGameBtn.addEventListener("click",resetGame);  
resetBtn.addEventListener("click",resetGame);



