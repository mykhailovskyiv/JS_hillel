// Casino Создать массив из 3х массивов с 3-мя рандомными значениями.


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


// Alphabet Подготовить строку из всех возможных букв английского алфавита.


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

//Alphabet #2 с менторсокй помощью :)

var alfabet = "abcdefghijklmnopqrstuvwxyz";

var minLettersInWord = 5;
var maxLettersInWord = 10;
var numOfWords = 20;

function createRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function createRandomWord() {
    var wordLength = createRandomNumber(5, 10);
    var word = "";

    for (var i = 0; i < wordLength; i++) {
        var index = createRandomNumber(0, alfabet.length - 1);
        var letter = alfabet[index];

        word += letter;
    }

    return word;
}

function calculateWordCount(ar) {
    var obj = {};
    for (var i = 0; i < ar.length; i++) {
        var word = ar[i];
        var index = word.length;

        if (obj[index] === undefined) {
            obj[index] = [];
            obj[index].push(word);
        } else {
            obj[index].push(word);
        }
    }

    return obj;
}

function print(result) {
    for (var key in result) {
        var value = result[key];

        console.log(key, value);
        console.log("You have " + value.length + " words with length " + key);
    }
}

var arr = [];
for (var i = 0; i < numOfWords; i++) {
    var randomWord = createRandomWord();
    arr.push(randomWord);
}

var result = calculateWordCount(arr);

print(result);
