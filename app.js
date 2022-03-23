class Casino {
    constructor(name, isFakeCoin)
    {
        this.name = name
        if(isFakeCoin === undefined) this.isFakeCoin = false;
        else this.isFakeCoin = isFakeCoin
        this.timesPlayed = 0
    }
    playGame(bet){
        if(this.isFakeCoin == false && Math.random() > 0.5) console.log(`You won ${bet * (this.timesPlayed + 1)} from ${this.name}`) //Loss
        else console.log(`${this.name} wins!`) //Win
        this.timesPlayed++
    }
    rollDie(sides)
    {
        console.log(`You rolled a ${Math.floor(Math.random() * sides) + 1}`)
    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);