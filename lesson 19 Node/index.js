var fs = require('fs');

var value = fs.readFileSync('message.txt', { encoding: 'utf8' });
console.log(value);

// fs.writeFile('message.txt', 'Hello Valleron', function (err) {
//     if (err) console.log('Error', err);
//     console.log('File has been saved ');
// })

// fs.readFile('message.txt', function (_, data) {
//     console.log(data.toString('utf8'));
// })

fs.promises.readFile('message.txt')
    .then(function (data) {
        return data.toString();
    })
    .then(function (string) {
        return fs.promises.writeFile('message.txt', Number(string) + 1)
    })
    .then(function () {
        console.log('File is ready!')
    })