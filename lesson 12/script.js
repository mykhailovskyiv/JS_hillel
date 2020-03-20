function Animal(gender, moveTypes) {
    this.gender = gender || 'female';
    this.moveTypes = moveTypes || 'Jump, Run';
};

Animal.prototype.jump = function () {
    console.log('Jumping')
};

Animal.prototype.run = function () {
    console.log('Running');
};

function Mammal() {
    Animal.call(this)
};

Mammal.prototype.giveMilk = function () {
    if (this.gender === 'female') {
        return true
    }

    if (this.gender === 'male') {
        return false
    }
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

function Coon() {
    Mammal.call(this)
};

Coon.prototype = Object.create(Mammal.prototype);
Coon.prototype.constructor = Coon;

Coon.prototype.thief = function () {
    console.log(["im thief"]);
};

var coon = new Coon();
console.log(coon);

