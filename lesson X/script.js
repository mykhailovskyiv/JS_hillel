var arr = [-3, -2, -1, 0, 1, 2, 3];

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}
forEach(arr, function (num) {
    console.log(num);
});

function map(arr, cb) {
    var arrTwo = [];
    for (var i = 0; i < arr.length; i++) {
        arrTwo[i] = cb(arr[i]);
    }
    return arrTwo;
}
var res = map(arr, function (num) { return num ** 2 });
console.log(res);

