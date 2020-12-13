/* 
 * I need to finish imageConvert
 */

/* global results, global totalMoney, global totalWinnings, global totalSpent, global pictures, global slotBase */
let results = 0, totalMoney = 0, totalWinnings = 0, totalSpent = 0;
let pictures = [], slotBase = [];
document.getElementById("placeBet").addEventListener("click",runSlots);
document.getElementById("dropOut").addEventListener("click",getOut);
document.getElementById("addFunds").addEventListener("click",moneyAdding);

//functions list

//runs the slot machine and determines the amount gained or lost
function runSlots() {
    randomSlots();
    results = parseInt(document.getElementById("betAmount").value);
    if (results > totalMoney) {
        alert("Place a lower bet or add more money to your account.");
    }
    else {
        if (slotBase[0] === slotBase[1] && slotBase[1] === slotBase[2]) {
            results *= 3;
        }
        //else if any two results match
        else if (slotBase[0] === slotBase[1] || slotBase[0] === slotBase[2] || slotBase[1] === slotBase[2]) {
            results *= 2;
        }
        else {
            results *= -1;
        }
        applyResults();
        resultsDisp();
    }
    slotBase = [];
    changeVars();
}

//find the slot results
function randomSlots() {
    let randomNumber = 0;
    for (i = 0; i < 3; i++) {
        randomNumber = Math.ceil(Math.random() * 6);
        if (randomNumber === 1) {
            slotBase.push("bar");
        } else if (randomNumber === 2) {
            slotBase.push("bell");
        } else if (randomNumber === 3) {
            slotBase.push("cherries");
        } else if (randomNumber === 4) {
            slotBase.push("melon");
        } else if (randomNumber === 5) {
            slotBase.push("orange");
        } else {
            slotBase.push("plum");
        }
    }
}

//applys results to totals
function applyResults() {
    totalMoney+= results;
    if (results < 0) {
        totalSpent -= results;
    }
    else {
        totalWinnings += results;
    }
}

//adds more money into your total money
function moneyAdding() {
    let addMoney = Number(prompt("How much money are you adding? "));
    totalMoney += addMoney;
    changeVars();
}

//drops player out of the game
function getOut() {
    alert("You left with $" + totalMoney + ". You won $" + totalWinnings + ". You spent $" + totalSpent);
    totalMoney = 0;
    totalWinnings = 0;
    totalSpent = 0;
    changeVars();
}

//displays the results of the slot machine
function resultsDisp() {
    document.getElementById("slots").innerHTML = (slotBase[0] + " | " + slotBase[1] + " | " + slotBase[2]);
    if (results >= 0) {
        document.getElementById("winLose").innerHTML = "You win!";
    }
    else {
        document.getElementById("winLose").innerHTML = "You lose!";
    }
}

//gives the proper values to the index file
function changeVars() {
    document.getElementById("totalMoney").innerHTML = totalMoney;
    document.getElementById("totalWinnings").innerHTML = totalWinnings;
    document.getElementById("totalSpent").innerHTML = totalSpent;
}

