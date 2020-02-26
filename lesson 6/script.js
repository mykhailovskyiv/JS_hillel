// Casino

var arr = [];
var elements = 3;
var maxRandom = 3;
var numberOfUser = +prompt('enter the number');

for (f = 0; f < numberOfUser; f++) {
    var arr = [];
    for (var i = 0; i < elements; i++) {
        arr.push([
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom),
            Math.floor(Math.random() * maxRandom)
        ])
    }
    var lineFill = false;
    console.log(arr);

    if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
        lineFill = true, alert('mission completed CJ');
    }
    console.log(lineFill);

}


// Alphabet


var alphabet = "abcdefghijklmnopqrstuvwxyz";
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var wordsAmount = + prompt('how many words you need');
var minLength = + prompt('min lenght of word');
var maxLength = + prompt(' max lenght of word');

var library = {};

for (var i = 0; i < wordsAmount; i++) {
    var wordLength = random(maxLength, minLength);
    var word = '';
    for (var j = 0; j < wordLength; j++) {
        word = word + alphabet[random(0, alphabet.length)]
    }

    if (library[wordLength]) {
        library[wordLength].push(word);
    } else {
        library[wordLength] = [word];
    }
}

for (var key in library) {
    console.log('You have ' + library[key].length + ' words with length of ' + key);
}
