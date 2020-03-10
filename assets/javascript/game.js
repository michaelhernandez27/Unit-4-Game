var crystal = {
    ruby: {
        name: "Ruby",
        value: 0
    },
    diamond: {
        name: "Diamond",
        value: 0
    },
    amethyst: {
        name: "Amethyst",
        value: 0
    },
    emerald: {
        name: "Emerald",
        value: 0
    }
};


var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {

    
    currentScore = 0;
    winCount = 0;
    lossCount = 0;

    targetScore = getRandom(19, 120);

    crystal.ruby.value = getRandom(1, 12);
    crystal.amethyst.value = getRandom(1, 12);
    crystal.emerald.value = getRandom(1, 12);
    crystal.diamond.value = getRandom(1, 12);

    $("#targScore").html(targetScore)
    $("#curScore").html(currentScore)

}

var chgVal = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#curScore").html(currentScore);

    checkWin();
};

var checkWin = function () {

    if (currentScore > targetScore) {
        alert("Sorry, try again!");

        lossCount++;
        $("#lossCount").html(lossCount);
        startGame();

    }

    else if (currentScore == targetScore) {
        alert("YOU WIN!!!");

        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }
}

startGame();

$("#ruby").click(function () {
    chgVal(crystal.ruby);
});

$("#emerald").click(function () {
    chgVal(crystal.emerald);
});

$("#diamond").click(function () {
    chgVal(crystal.diamond);
});

$("#amethyst").click(function () {
    chgVal(crystal.amethyst);
});
