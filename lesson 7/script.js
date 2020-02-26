// var arr = [];

// var pickTimes = 5;
// var elements = 3;
// var maxRandom = 3;

// for (var i = 0; i < pickTimes; i++) {
//     arr = [];
//     for (var j = 0; j < elements; j++) {
//         arr.push([
//             Math.floor(Math.random() * maxRandom),
//             Math.floor(Math.random() * maxRandom),
//             Math.floor(Math.random() * maxRandom)
//         ]);
//     }

//     var isLinesFill = false;
//     console.log(arr);

//     for (var f = 1; f < arr.length; f++) {
//         if (arr[0][1] !== arr[f][1]) {
//             break;
//         } else {
//             isLinesFill = true;
//         }
//     }

//     console.log(isLinesFill);
// }

// // Pizza

// var meat = "chicken";

// function cookPizza(address, meat, isHot) {
//     var ingridiets = {
//         meat: meat,
//         hot: isHot || true,
//         address: address
//     };
//     console.log("Cooking...");
//     console.log("Ready!");
//     console.log("Get your pizza", ingridiets);
// }

// cookPizza("address", "chicken", true);
// cookPizza("address", "cow", false);
// cookPizza("address", "racoon", true);
// cookPizza("address", "pig", false);
// cookPizza("address", "cat", null);
// cookPizza("address", "dog");
// cookPizza("address", "mouse");

// // Casino function

// function createLines(amountOfLines, maxRandom) {
//     var arr = [];
//     for (var j = 0; j < amountOfLines; j++) {
//         arr.push([
//             Math.floor(Math.random() * maxRandom),
//             Math.floor(Math.random() * maxRandom),
//             Math.floor(Math.random() * maxRandom)
//         ]);
//     }
//     return arr;
// }

// function checkLineIdentical(arr) {
//     var isNumbersIdentical = false;

//     for (var f = 1; f < arr.length; f++) {
//         if (arr[0][1] !== arr[f][1]) {
//             break;
//         } else {
//             isNumbersIdentical = true;
//         }
//     }
//     return isNumbersIdentical;
// }

// function createCasino(pickTimes, linesAmount, maxRandom) {
//     for (var i = 0; i < pickTimes; i++) {
//         var arr = createLines(linesAmount, maxRandom);
//         if (checkLineIdentical(arr)) {
//             return true;
//         }
//     }
//     return false;
// }

// var casinoResult = createCasino(5, 3, 3);

// console.log(casinoResult);

// function getRandom(min, max) {
//     console.log(Math.floor(Math.random() * (max - min) + min));
//     var getRandom = getRandom(1, 3)
// }

// function creatGame() {
//     for (j = 0; j < 1; j++) {
//         enterNum();
//     }
// }






// function enterNum() {
//     var numberResult = false;
//     var yourNum = +prompt('enter number from 1 to 10');
//     var randomNumber = Math.ceil(Math.random() * 2)
//     console.log(randomNumber)
//     for (var i = 0; i <= 0; i++) {
//         if (randomNumber == yourNum) {
//             alert('ура');
//         } else if (randomNumber != yourNum) {
//             alert('неа');
//         }
//     }
//     return true;
// }

// var result = creatGame();


function creatGame() {
    for (j = 0; j < 1; j++) {
        enterNum();
        if (enterNum() = true) {
            alert('ура');
        }
    }
}






function enterNum() {
    var numberResult = false;
    var yourNum = +prompt('enter number from 1 to 10');
    var randomNumber = Math.ceil(Math.random() * 2)
    console.log(randomNumber)
    for (var i = 0; i <= 0; i++) {
        if (randomNumber == yourNum) {
            enterNum() = true;
        } else if (randomNumber != yourNum) {
            enterNum() = false;
        }
    }
}

var result = creatGame();
