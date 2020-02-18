//Задание №1

var i = 1;
while (i < 100) {
    i++;
    if (i % 4) {
        continue;
    } console.log(i);
}

//Задание №2 Угадайка сгенерированного числа

function again() {
    yourNum = +prompt('попробуй еще раз');
}
var victory = false;
var number = Math.ceil(Math.random() * 10);
var yourNum = +prompt('введите число от 1 до 10');



do {
    again();
    if (yourNum == number) {
        victory = true(alert('Вы угадали'))
    }
    if (Number.isNaN(yourNum)) {
        alert('цифры вводи епт');
    }
    if (yourNum === null) {
        alert('зря');
    }
} while (!victory);

// Задание №3 Кратные числа 

var n = + prompt('введите число')

for (var i = 1; i < 100; i++) {
    if (i % n) continue;
    console.log(i);
}

// Задание №4 Кратные числа

var n = + prompt('введите число')
var y = + prompt('сколько числе нужно получить')

for (var i = 1; i < (y * n + 1); i++) {
    if (i % n) continue;
    console.log(i);
}

