var gameArray = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
gamePlaying = true;

function scrollConsoleToBottom() {
    $('#gameConsoleLog').scrollTop($('#gameConsoleLog')[0].scrollHeight);
}

$(document).on('click', ".gameTile.clickable", function() {
    if (gamePlaying==true){
        if ($(this).hasClass("occupied")){
            console.log("Space is already occupied!");
        } else {
            $(this).addClass("occupied cross");
            $(this).removeClass("vacant");
            logToGameConsole("Player 1 takes spot: ("+$(this).parent().index()+","+$(this).index()+").");
            gameArray[$(this).parent().index()][$(this).index()]=1;
            $(this).append('<i class="playerMarker fa fa-times fa-5x" aria-hidden="true"></i>');
            //window.setTimeout(computerTurn,2000);
        }
        checkWinner();
        $(".gameTile").removeClass("clickable");
        setTimeout(computerTurn,500);
    }
});

function logToGameConsole(string){
    var d = new Date();
    var twelveHour = "AM";
    var singleDigitMinutePrefix = "";
    var timestampHours = d.getHours();
    if (d.getHours() > 12){
        twelveHour = "PM";
        timestampHours = d.getHours()-12;
    }
    if (d.getMinutes()<10){
        singleDigitMinutePrefix = "0";
    }
    $('#gameConsoleLog').append("\n["+timestampHours+":"+singleDigitMinutePrefix+d.getMinutes()+" "+twelveHour+"] "+string);
    scrollConsoleToBottom();
}

function computerTurn(){
    if (gamePlaying==true){
        $(".vacant").first().addClass("occupied circle");
        logToGameConsole("Player 2 takes spot: ("+$(".vacant").first().parent().index()+","+$(".vacant").first().index()+").");
        gameArray[$(".vacant").first().parent().index()][$(".vacant").first().index()]=2;
        $(".vacant").first().append('<i class="playerMarker fa fa-circle-o fa-5x" aria-hidden="true"></i>');
        $(".vacant").first().removeClass("vacant");
        checkWinner();
        if (gamePlaying==true){
            $(".gameTile").addClass("clickable");
        }
    }
}

function checkWinner(){
    if (gameArray[0][0]==gameArray[0][1] && gameArray[0][0]==gameArray[0][2]){
        if (gameArray[0][0] != 0){
            $(".gameTile:eq(0)").addClass("three-in-a-row");
            $(".gameTile:eq(1)").addClass("three-in-a-row");
            $(".gameTile:eq(2)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[1][0]==gameArray[1][1] && gameArray[1][0]==gameArray[1][2]){
        if (gameArray[1][0] != 0){
            $(".gameTile:eq(3)").addClass("three-in-a-row");
            $(".gameTile:eq(4)").addClass("three-in-a-row");
            $(".gameTile:eq(5)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[1][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[2][0]==gameArray[2][1] && gameArray[2][0]==gameArray[2][2]){
        if (gameArray[2][0] != 0){
            $(".gameTile:eq(6)").addClass("three-in-a-row");
            $(".gameTile:eq(7)").addClass("three-in-a-row");
            $(".gameTile:eq(8)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[2][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][0]==gameArray[1][0] && gameArray[0][0]==gameArray[2][0]){
        if (gameArray[0][0] != 0){
            $(".gameTile:eq(0)").addClass("three-in-a-row");
            $(".gameTile:eq(3)").addClass("three-in-a-row");
            $(".gameTile:eq(6)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][1]==gameArray[1][1] && gameArray[0][1]==gameArray[2][1]){
        if (gameArray[0][1] != 0){
            $(".gameTile:eq(1)").addClass("three-in-a-row");
            $(".gameTile:eq(4)").addClass("three-in-a-row");
            $(".gameTile:eq(7)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][1]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][2]==gameArray[1][2] && gameArray[0][2]==gameArray[2][2]){
        if (gameArray[0][2] != 0){
            $(".gameTile:eq(2)").addClass("three-in-a-row");
            $(".gameTile:eq(5)").addClass("three-in-a-row");
            $(".gameTile:eq(8)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][2]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][0]==gameArray[1][1] && gameArray[0][0]==gameArray[2][2]){
        if (gameArray[0][0] != 0){
            $(".gameTile:eq(0)").addClass("three-in-a-row");
            $(".gameTile:eq(4)").addClass("three-in-a-row");
            $(".gameTile:eq(8)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][0]+" is the winner.");
            gamePlaying = false;
        }
    } else if (gameArray[0][2]==gameArray[1][1] && gameArray[0][2]==gameArray[2][0]){
        if (gameArray[0][2] != 0){
            $(".gameTile:eq(2)").addClass("three-in-a-row");
            $(".gameTile:eq(4)").addClass("three-in-a-row");
            $(".gameTile:eq(6)").addClass("three-in-a-row");
            logToGameConsole("Player "+gameArray[0][2]+" is the winner.");
            gamePlaying = false;
        }
    }
}

function newGame(){
    gameArray = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    $(".three-in-a-row").removeClass("three-in-a-row");
    $(".gameTile").addClass("vacant");
    $(".gameTile").removeClass("occupied");
    $(".gameTile").addClass("clickable");
    $(".playerMarker").remove();
    logToGameConsole("Starting new game.");
    gamePlaying = true;
}