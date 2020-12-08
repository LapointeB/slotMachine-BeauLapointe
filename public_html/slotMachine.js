/* 
 * I need to finish imageConvert, as well as the rundown
 */
//rundown of events

/* global results, totalMoney, totalWinnings, totalSpent, pictures, slotBase */
let results, totalMoney, totalWinnings, totalSpent;
let pictures = [], slotBase = [];
document.getElementById("placeBet").addEventListener("click", );

//functions list

//runs the slot machine and determines the amount gained or lost
function runSlots(amountBet, amountTotal, slotResults) {
    if (amountBet > amountTotal) {
        Alert("Place a lower bet or add more money to your account.");
    }
    else {
        if (slotResults[0] === slotResults[1] && slotResults[1] === slotResults[2]) {
            amountBet *= 3;
        }
        //else if any two results match
        else if (slotResults[0] === slotResults[1] || slotResults[0] === slotResults[2] || slotResults[1] === slotResults[2]) {
            amountBet *= 2;
        }
        else {
            amountBet *= -1;
        }
        return amountBet;
    }
}

//find the slot results
function randomSlots() {
    let slotArray = [];
    let randomNumber = 0;
    for (i = 0; i < 3; i++) {
        randomNumber = Math.ceil(Math.random() * 6);
        if (randomNumber === 1) {
            slotArray.push("bar");
        } else if (randomNumber === 2) {
            slotArray.push("bell");
        } else if (randomNumber === 3) {
            slotArray.push("cherries");
        } else if (randomNumber === 4) {
            slotArray.push("melon");
        } else if (randomNumber === 5) {
            slotArray.push("orange");
        } else {
            slotArray.push("plum");
        }
    }
    return slotArray;
}

//converts the slot results into images
function imageConvert(slots) {
    
}

//adds more money into your total money
function moneyAdding(currentMoney) {
    let addMoney = prompt("How much money are you adding? ");
    currentMoney += addMoney;
    return currentMoney;
}

