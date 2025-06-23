
let play_again ='y';
let games_played = 0;

while (play_again == 'y'){
    games_played++
    console.log("Games played: ",games_played);
    play_again = prompt("Play again? y/n");
    if(play_again == 'y'){
       console.log("Playing again!")
    }
    else{
        console.log("Quitting? Ok!");
        play_again = 'n';
        // break;
    }
}

console.log("Goodbye!")