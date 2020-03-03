var obj = {
    name: "MyFutureObject",
    age: 24,
    sex: "male",
    getAge: function () {
        return this.age;
    },
    incAge: function () {
        return this.age++;
    }
};

function User(name, age, exp, sex) {
    // {} <- this.
    this.exp = exp;
    this.name = name;
    this.age = age;
    this.sex = sex === undefined ? "female" : "male";
    this.salary = 500;
}

User.prototype.getAge = function () {
    return this.age;
};

User.prototype.incAge = function () {
    return this.age++;
};

User.prototype.incSalary = function (bonusesAmount) {
    var bonuses = Number(bonusesAmount) || 0;
    return (this.salary += 500 + bonuses + (this.exp / 100) * bonuses);
};

var usersArray = [];

for (var i = 0; i < 5; i++) {
    usersArray.push(new User("User " + i, 24 + i, i + 1));
}

for (var i = 0; i < usersArray.length; i++) {
    usersArray[i].incAge();
    usersArray[i].incSalary(200);
}

console.log(usersArray);
