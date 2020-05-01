var express = require('express');
var app = express();
var cors = require('cors')


function user(id, name) {
    this.id = id || 'id';
    this.name = name || 'User Name';
};


function arrUsers(arrlenght) {
    var arr = [];
    for (let i = 0; i < arrlenght; i++) {
        arr.push(new user(i + 1, 'User Name' + (i + 1)));
    }
    return arr;
}

var arrOfUsers = arrUsers(10).map(function (id) {
    return id
})




app.use(cors())



app.get('/', function (req, res) {
    res.json(arrOfUsers);
    res.send(arrOfUsers);
});

app.post('/', function (req, res) {
    arrOfUsers.push(req.body);
    res.json(req.body);
});

app.delete('/:id', function (req, res) {
    const index = arrOfUsers.findIndex(function (value) {
        return value.id === req.body.id;
    });
    arrOfUsers.splice(index, 1);
    res.json(req.body);
});

app.listen(3000, function () {
    console.log('listening port: 3000');
});

console.log(arrOfUsers)
