// Variables
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePoints=document.querySelector("#user-score");
const compScorePoints=document.querySelector("#comp-score");

// Functions
const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    
    msg.innerText="Game was draw. Play Again"
    msg.style.backgroundColor="grey"; 
   
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if (userWin){
        userScore++;
        userScorePoints.innerText=userScore;        
        msg.innerText=`You win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{        
        compScore++;
        compScorePoints.innerText=compScore;
        msg.innerText=`You lost!, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
    
};

const playGame= (userChoice)=>{
    
    const compChoice=genCompChoice();
   

if (userChoice===compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice===paper?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }

    showWinner(userWin, userChoice, compChoice);
}

};

// EventListener
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);        
    });    
});

