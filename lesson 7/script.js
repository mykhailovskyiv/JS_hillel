
// Разделить задачу с угадыванием числа на функции. 


function createGame() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    while (true) {
        var result = requestAndCheck(randomNumber);
        if (result) {
            break;
        }
    }
}

function requestAndCheck(randomNumber) {
    console.log("randomNumber", randomNumber);
    var value = prompt("Enter number");

    if (value === null || Number.isNaN(+value)) {
        alert("try again");
        return true;
    }

    if (+value === randomNumber) {
        alert("mission compete CJ");
        return true;
    }

    return false;
}

var result = createGame();