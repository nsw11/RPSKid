
function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function getUserChoice(choice)
{
    if (choice== "rock")
    {
        return 0;
    }
    else if (choice== "paper")
    {
        return 1; 
    }
    else if (choice== "scissors")
    {
        return 2;
    }
    else
    {
        console.log("Invalid Input! Please Try again\n")
    }
}

function parse_value(value)
{
    if (value == 0)
    {
        return "Rock"
    }
    if (value == 1)
    {
        return "Paper"
    }
    if (value == 2)
    {
        return "Scissors"
    }
    else
    {
        return "Invalid Value"
    }
}

function play_round(UserChoice)
{
    if (UserScore >= 5 || CompScore>=5)
        {
            return
        }
//Generate Computer Choice
    let ComputerChoice = getComputerChoice();
//List Choices for round processing
    const PlayerResult = document.querySelector("#PlayerChoice");
    PlayerResult.textContent= "You Chose: " + parse_value(UserChoice);
    const CompResult = document.querySelector("#CompChoice");
    CompResult.textContent= "Computer Chose: " + parse_value(ComputerChoice);
    const results = document.querySelector("#result");
//Determine Winner + Update Global Variable
    if ((ComputerChoice == 2 & UserChoice == 0)) //User Wins
    {
        results.textContent = "\t You win the round!";
        ++UserScore;
    }
    else if ((ComputerChoice == 0 & UserChoice == 2)) //Computer Wins
    {
        results.textContent = "\t The computer win this round!";
        ++CompScore;
    }
    else if (UserChoice>ComputerChoice)
    {
        results.textContent = "\t You win the round!";
        ++UserScore;
    }
    else if (UserChoice<ComputerChoice)
    {
        results.textContent = "\t The computer win this round!";
        ++CompScore;
    }
    else
    {
        results.textContent = "\t This round is a tie!";
    }
    
//Update Scoreboard
const User_scoreboard = document.querySelector("#UserScore");
const Comp_scoreboard = document.querySelector("#CompScore");
User_scoreboard.textContent = UserScore;
Comp_scoreboard.textContent = CompScore;
//Describe Round
if (UserScore >= 5)
    {
        const match_result = document.createElement("div");
        match_result.textContent = "User wins the game!";
        const final_result = document.querySelector("#LastResult");
        final_result.appendChild(match_result);
    }
    else if (CompScore>=5)
    {
        const match_result = document.createElement("div");
        match_result.textContent = "Computer wins the game!";
        const final_result = document.querySelector("#LastResult");
        final_result.appendChild(match_result);
    }
}
let UserScore = 0;
let CompScore = 0;
let play = document.querySelector("#buttons");
play.addEventListener('click',(event)=>{
    play_round(getUserChoice(event.target.id));
})

