$(document).ready(function() {

    var randNumber = 0;
    var wins = 0;
    var losses = 0;
    var greenValue;
    var blueValue;
    var pinkValue;
    var purpleValue;
    var playerScore = 0;

    //when new round starts, new random number between is selected, new values for the crystal is selected, and playerscore resets to 0
    function reset() {
        randNumber = Math.floor((Math.random() * 101) + 19);
        console.log(Math.max(randNumber));
        crystalValueGenerator();
        console.log(greenValue, blueValue, pinkValue, purpleValue);
        $('#random-number').text(randNumber);
        playerScore = 0;
        $('#score-counter').text(playerScore);
        $("#replay-button").hide();
    }
    reset();

    function playAgain() {
        $("#replay-button").show();
        $("#replay-button").on("click", function() {
            reset();
        })
    }

    //ensure none of the crystals have to same value in a round

    function crystalValueGenerator() {
        greenValue = Math.floor((Math.random() * 12) + 1);
        blueValue = Math.floor((Math.random() * 12) + 1);
        pinkValue = Math.floor((Math.random() * 12) + 1);
        purpleValue = Math.floor((Math.random() * 12) + 1);
        console.log(greenValue, blueValue, pinkValue, purpleValue);
        if ((greenValue === blueValue) || (greenValue === pinkValue) || (greenValue === purpleValue) || (blueValue === pinkValue) 
        || (blueValue === purpleValue) || (pinkValue === purpleValue)) {
            crystalValueGenerator();
        }
    }

    //when player clicks on a crystal, add the value to playerScore
    $("#green-button").on("click", function() {
        playerScore += greenValue;
        $("#score-counter").text(playerScore);
    })
    $("#blue-button").on("click", function() {
        playerScore += blueValue;
        $("#score-counter").text(playerScore);
    })
    $("#pink-button").on("click", function() {
        playerScore += pinkValue;
        $("#score-counter").text(playerScore);
    })
    $("#purple-button").on("click", function() {
        playerScore += purpleValue;
        $("#score-counter").text(playerScore);
    })

    $(".crystal").on("click", function() {
        
        if (playerScore === randNumber) {
            win();
            return false;
                    
        } else if (playerScore > randNumber) {
            loss();  
        }
    })
    //player keeps click crystals until player score matches or exceeds randNumber
    function win() {
        wins++;
        console.log(wins);
        $("#win-counter").text(wins);
        playAgain();
    }

    function loss() {
        losses++;
        console.log(losses);
        $("#loss-counter").text(losses);
        playAgain();
    }

    
    
    //if playerScore matches randNumber, add 1 to wins, reset

    //if playerScore exceeds randNumber, add 1 to loss, reset
})