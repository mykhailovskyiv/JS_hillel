var arr = [];

var pickTimes = +prompt('сколько раз?');
var elements = 3;
var maxRandom = 3;

for (var i = 0; i < pickTimes; i++) {
    arr = [];
    for (var j = 0; j < elements; j++) {
        arr.push([
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom)
        ]);
    }

    var isLinesFill = false;
    console.log(arr);

    for (var f = 1; f < arr.length; f++) {
        if (arr[0][1] !== arr[f][1]) {
            break;
        } else if (isLinesFill = true) {
            alert('congratulations');
        } else {
            isLinesFill = true;
        }
    }


    console.log(isLinesFill);
}


