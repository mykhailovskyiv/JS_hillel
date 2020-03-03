//Написать скрипт, который будет выводить часы в консоль. В формате HH:mm:ss

function currentTime() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    console.log('Time:' + hour, + minute, + second);
}


setInterval(currentTime, 1000);

//Написать функцию, которая возвращает количество часов, прошедших с момента введенной даты.

function timePassedFrom() {
    var date = new Date();
    var myDate = new Date(1994, 6, 24);
    var timePassed = date - myDate;
    console.log(date);
    console.log(myDate);
    var hour = Math.round(timePassed / (1000 * 60 * 60));
    console.log("passed from myDate " + hour + " hours ");
}

timePassedFrom();