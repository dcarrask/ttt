var gameArray = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
gamePlaying = true;
$(document).on('click', ".gameTile", function() {
    if (gamePlaying==true){
        if ($(this).hasClass("occupied")){
            console.log("Space is already occupied!");
        } else {
            $(this).addClass("occupied cross");
            $(this).removeClass("vacant");
            gameArray[$(this).parent().index()][$(this).index()]=1;
            $(this).append('<i class="fa fa-times fa-5x" aria-hidden="true"></i>');
            //window.setTimeout(computerTurn,2000);
        }
        checkWinner();
        computerTurn();
    }
});

function computerTurn(){
    if (gamePlaying==true){
        $(".vacant").first().addClass("occupied circle");
        gameArray[$(".vacant").first().parent().index()][$(".vacant").first().index()]=2;
        $(".vacant").first().append('<i class="fa fa-circle-o fa-5x" aria-hidden="true"></i>');
        $(".vacant").first().removeClass("vacant");
        checkWinner();
    }
}

function checkWinner(){
    if (gameArray[0][0]==gameArray[0][1] && gameArray[0][0]==gameArray[0][2]){
        if (gameArray[0][0] != 0){
            console.log(gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[1][0]==gameArray[1][1] && gameArray[1][0]==gameArray[1][2]){
        if (gameArray[1][0] != 0){
            console.log(gameArray[1][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[2][0]==gameArray[2][1] && gameArray[2][0]==gameArray[2][2]){
        if (gameArray[2][0] != 0){
            console.log(gameArray[2][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][0]==gameArray[1][0] && gameArray[0][0]==gameArray[2][0]){
        if (gameArray[0][0] != 0){
            console.log(gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][1]==gameArray[1][1] && gameArray[0][1]==gameArray[2][1]){
        if (gameArray[0][1] != 0){
            console.log(gameArray[0][1]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][2]==gameArray[1][2] && gameArray[0][2]==gameArray[2][2]){
        if (gameArray[0][2] != 0){
            console.log(gameArray[0][2]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][0]==gameArray[1][1] && gameArray[0][0]==gameArray[2][2]){
        if (gameArray[0][0] != 0){
            console.log(gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][2]==gameArray[1][1] && gameArray[0][2]==gameArray[2][0]){
        if (gameArray[0][2] != 0){
            console.log(gameArray[0][2]+" is the winner.");
            gamePlaying = false;
        }
    }
}