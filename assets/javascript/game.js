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

}