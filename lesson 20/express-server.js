var express = require('express');
var app = express();

var arr = []

var generateObject = function () {
    return {
        value: (Math.random() * 100) >> 0,
    }
}

app.get('/', function (req, res) {
    res.send('App works!')
})

app.post ('favorites', function (req, res) {
    
})

app.get('/', function (req, res) {
    arr.push(generateObject());
    res.sjson(arr);
});

app.listen(3000, function () {
    console.log('App is on listening port 3000');
});
