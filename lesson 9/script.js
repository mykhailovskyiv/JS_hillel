var dwarf = new MilitaryResource('Dwarf');


function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = Math.floor(Math.random() * 5);
    this.maxHealth = 5;
    this.distance = Math.floor(Math.random() * 5);
    this.maxDistance = 5;
}

MilitaryResource.prototype.isReadyToMove = function () {
    return this.distance > 0;
};
MilitaryResource.prototype.isReadyToFight = function () {
    return this.health > 0;
};
MilitaryResource.prototype.restore = function () {
    var newDistance;
    var newHealth;
    if (this.distance <= 0) {
        newDistance = 5;
    }
    if (this.health <= 0) {
        newHealth = 5;
    }
    return this.distance = newDistance, this.health = newHealth;
};

MilitaryResource.prototype.clone = function () {
    return obj = new this.constructor(this.type, this.health, this.distance);
}

console.log(dwarf);
console.log(dwarf.isReadyToMove());
console.log(dwarf.isReadyToFight());
dwarf.restore();
console.log(dwarf.health);
console.log(dwarf.distance);



function Squad() {
    this.squad = [];
}

var restore = [];

Squad.prototype.everyIsReadyToMove = function () {
    return this.squad.every(function (unit) {
        return unit.isReadyToMove() === true;
    });
};

Squad.prototype.everyIsReadyToFight = function () {
    return this.squad.every(function (unit) {
        return unit.isReadyToFight() === true;
    });
};

Squad.prototype.combineResources = function (unit) {
    if (unit.health < 5 || unit.distance < 50) {
        restore.push(unit);
    } else {
        this.squad.push(unit);
    }
};


var unitOne = new MilitaryResource(dwarf);
var unitTwo = new MilitaryResource(dwarf);
var unitThre = new MilitaryResource(dwarf);
var squad = new Squad();

console.log(restore);