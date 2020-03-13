var arr = [1, 2, 3];


//forEach

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}
forEach(arr, function (num) {
    console.log(num);
});


//map


function map(arr, cb) {
    var arrTwo = [];
    for (var i = 0; i < arr.length; i++) {
        arrTwo[i] = cb(arr[i]);
    }
    return arrTwo;
}
var res = map(arr, function (num) { return num ** 2 });
console.log(res);

//filter

function filter(arr) {
    var arrTwo = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) arrTwo = arr[i];
    }
    return arrTwo;
}
var res = filter([1, 2, 3], function (number, index) { return index > 1 });
console.log(res);

//some

function some(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i], i))
            return true;
    }
    return false;
}
var res = some([1, 2, 3], function (num, index) { return index > 1 });
console.log(res);

//every

function every(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i], i))
            return true;
    }
    return false;
}
var res = every([1, 2, 3], function (num, index) { return index > 0 });
console.log(res);