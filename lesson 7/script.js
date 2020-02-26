
function createGame(yourNum, randomNumber) {
    var resultOfNum = false;
    if (yourNum === randomNumber) {
        resultOfNum = true; alert('mission complete CJ'); console.log(randomNumber);
    }
    return resultOfNum;
}






function enterNum() {

    for (var randomNumber = Math.floor(Math.random() * 5) + 1, yourNum = true; yourNum;) {
        yourNum = +prompt("enter the number from 1 to 5 ");
        if (createGame(yourNum, randomNumber)) {
            yourNum = false
        }
    }

}

var result = enterNum();

