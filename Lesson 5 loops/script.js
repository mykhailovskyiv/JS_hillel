// var userIsTired = true,
//     number = 0;
// do {
//     userIsTired = confirm("Are you tired of clicking on ok " + (++number) + "?");
// } while (userIsTired);

// var number = 0;
// do ++number;
// while (confirm("Are you tired of clicking on ok " + number + "?"))

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
