$(document).ready(function () {
    var winsX = 0
    var lossesX = 0
    var yellowButtonX = Math.floor(Math.random() * 12) + 1;
    var redButtonX = Math.floor(Math.random() * 12) + 1;
    var blueButtonX = Math.floor(Math.random() * 12) + 1;
    var greenButtonX = Math.floor(Math.random() * 12) + 1;
    var targetAmountX = Math.floor(Math.random() * 120) + 19;
    // start button on screen will roll random number for crystals and game score
    // each crystal will be assigned a random value between 1-12 at start of round
    $("#startButton").on("click", function () {
        resetValue()

        console.log("yellow " + yellowButtonX);
        console.log("red " + redButtonX);
        console.log("blue " + blueButtonX);
        console.log("green " + greenButtonX);
        console.log("targetAmt " + targetAmountX);
        $("#targetScore").text(targetAmountX);


        // console.log ("yellow " + yellowButtonX);
        // console.log ("red " + redButtonX);
        // console.log ("blue " + blueButtonX);
        // console.log ("green " + greenButtonX);
        // console.log("targetAmt " + targetAmountX);
        // $("#targetScore").text(targetAmountX);
        

    });

    function resetValue() {
        currentAmtX = 0
        $("#currentAmount").text(currentAmtX)
        targetAmountX = Math.floor(Math.random() * 120) + 19;
        $("#targetAmount").text(targetAmountX)

        greenButtonX = Math.floor(Math.random() * 12) + 1;
        blueButtonX = Math.floor(Math.random() * 12) + 1;
        redButtonX = Math.floor(Math.random() * 12) + 1;
        yellowButtonX = Math.floor(Math.random() * 12) + 1;
    };

    var currentAmtX = 0
    // yellow button stuff

    


// yellow button stuff

    $("#yellowButton").on("click", function () {
        currentAmtX = currentAmtX + yellowButtonX;
        $("#currentAmount").text(currentAmtX);


        if (targetAmountX === currentAmtX) {
            alert("win");
            winsX++
            $("#wins").text(winsX)
        }
        else if (targetAmountX < currentAmtX) {
            alert("lose");
            lossesX++
            $("#losses").text(lossesX)
        }

    });

    // red button stuff
    $("#redButton").on("click", function () {
        currentAmtX = currentAmtX + redButtonX;
        $("#currentAmount").text(currentAmtX);


        if (targetAmountX === currentAmtX) {
            alert("win");
            winsX++
            $("#wins").text(winsX)
        }
        else if (targetAmountX < currentAmtX) {
            alert("lose");
            lossesX++
            $("#losses").text(lossesX)
        }

    });

    // blue button stuff
    $("#blueButton").on("click", function () {
        currentAmtX = currentAmtX + blueButtonX;
        $("#currentAmount").text(currentAmtX);


        if (targetAmountX === currentAmtX) {
            alert("win");
            winsX++
            $("#wins").text(winsX)
        }
        else if (targetAmountX < currentAmtX) {
            alert("lose");
            lossesX++
            $("#losses").text(lossesX)
        }

    });

    // green button stuff 
    $("#greenButton").on("click", function () {
        currentAmtX = currentAmtX + greenButtonX;
        $("#currentAmount").text(currentAmtX);


        if (targetAmountX === currentAmtX) {
            alert("win");
            winsX++
            $("#wins").text(winsX)
        }
        else if (targetAmountX < currentAmtX) {
            alert("lose");
            lossesX++
            $("#losses").text(lossesX)
        }

    });


    // aside from that will display a random number between 19-120 decided at start of round

    // player clicks crystal and score is stored
    // display score on screen
    // player clicks more crystals and score is addended and stored

    // player must get exactly the value of the random number

    // if player gets random score exactly they win

    // store amount of wins on bottom of screen


});