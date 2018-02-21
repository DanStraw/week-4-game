$(document).ready(function() {

    var randNumber;
    var wins = 0;
    var losses = 0;
    var greenValue;
    var blueValue;
    var pinkValue;
    var purpleValue;
    var playerScore;

    //when new round starts, new random number between is selected, new values for the gem is selected, and playerscore resets to 0
    function reset() {
        randNumber = Math.floor((Math.random() * 101) + 19);
        console.log(Math.max(randNumber));
        $('#random-number').text(randNumber);
        playerScore = 0;
        $('#score-counter').text(playerScore);
    }
    reset();

    //ensure none of the gems have to same value in a round

    function gemValueGenerator() {
        greenValue = Math.floor(Math.random() * 12 + 1);
        blueValue = Math.floor(Math.random() * 12 + 1);
        pinkValue = Math.floor(Math.random() * 12 + 1);
        purpleValue = Math.floor(Math.random() * 12 + 1);
        parseInt(greenValue);
        console.log(greenValue, blueValue, pinkValue, purpleValue);
        if ((greenValue === blueValue) || (greenValue === pinkValue) || (greenValue === purpleValue) || (blueValue === pinkValue) 
        || (blueValue === purpleValue) || (pinkValue === purpleValue)) {
            gemValueGenerator();
        }
    }
    gemValueGenerator();

    //when player clicks on a gem, add the value to playerScore
    $(".btn").on("click", function() {
        playerScore = $(this).val();
        parseInt(playerScore);
        console.log('button clicked');
        console.log(playerScore);
        $("#score-counter").val(playerScore);
    })
    //player keeps click gems until player score matches or exceeds randNumber
    function winLoss() {
       /* function playAgain() {
            $(".replay-button").on("click", function() {
                reset();
            })
        }*/
        if (playerScore === randNumber) {
            wins++;
            $("win-counter").text(wins);
            playAgain();
        } else if (playerScore > randNumber) {
            losses++;
            $("#loss-counter").text(losses);
        }
    }
    //if playerScore matches randNumber, add 1 to wins, reset

    //if playerScore exceeds randNumber, add 1 to loss, reset
})