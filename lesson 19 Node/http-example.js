var http = require('http');

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

var arrofName = arrUsers(10).map(function (users) {
    return users.name
})

console.log(arrofName)



var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end(JSON.stringify(arrofName));
});
server.listen(8080);
