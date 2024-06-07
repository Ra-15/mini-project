let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscosepara=document.querySelector("#user-score");
const compscosepara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissors
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
  
}

const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was draw, Play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscosepara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscosepara.innerText=compScore;
        // console.log("you loose");
        msg.innerText=`you loose.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
//    console.log("user choice=",userChoice);
   //generate computer choice->modular
   const compChoice=genCompChoice();
//    console.log("comp choice=",compChoice);

   if(userChoice === compChoice){
    //draw game
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
       userWin= compChoice === "paper"?false:true;
    }else if(userChoice === "paper"){
       userWin= compChoice === "scissors"?false:true;
    }else{
        //rock, paper
       userWin= compChoice === "rock"? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}


choices.forEach((choice)=>{
    // console.log(choice);
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
       console.log("choice was clicked",userChoice);
       playGame(userChoice);
   })
});
