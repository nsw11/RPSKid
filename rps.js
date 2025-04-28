
function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}
function getUserChoice()
{
    while(true)
    {
        let choice = prompt("Pick:Rock,Paper,or Scissors!\n");
        if (choice.toLowerCase()== "rock")
        {
            return 0;
        }
        else if (choice.toLowerCase()== "paper")
        {
            return 1; 
        }
        else if (choice.toLowerCase()== "scissors")
        {
            return 2;
        }
        else
        {
            console.log("Invalid Input! Please Try again\n")
        }
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

function play_round()
{
    let ComputerChoice = getComputerChoice();
    console.log("The Computer picked: "+parse_value(ComputerChoice))
    
    let UserChoice = getUserChoice();
    console.log("You picked: "+parse_value(UserChoice))

    
    if ((ComputerChoice == 2 & UserChoice == 0)) //User Wins
    {
        console.log("You win this round!\n")
        return 1
    }
    else if ((ComputerChoice == 0 & UserChoice == 2)) //Computer Wins
    {
        console.log("The computer win this round!\n")
        return -1
    }
    else if (UserChoice>ComputerChoice)
    {
        console.log("You win this round!\n")
        return 1 
    }
    else if (UserChoice<ComputerChoice)
    {
        console.log("The computer win this round!\n")
        return -1
    }
    else
    {
        console.log("The round is a tie!\n");
        return 0
    }
}

function play_game()
{
    console.log("If I beat you 3 times at rock paper scissors, I take your stand power!\n")
    let UserScore = 0
    let ComputerScore = 0;
    while (UserScore < 3 & ComputerScore<3)
    {
        let result = play_round()
        if (result==1)
        {
            ++UserScore;
        }
        else if (result==-1)
        {
            ++ComputerScore;
        }
        console.log("Current User Score: "+ UserScore+ "\n");
        console.log("Current Computer Score: "+ ComputerScore+ "\n");
    }
    if (UserScore>ComputerScore)
    {
        console.log("You Win!");
    }
    else
    {
        console.log("You Lose. Wah Wah!");
    }
}

play_game();