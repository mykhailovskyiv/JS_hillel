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



function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype.areReadyToMove = function () {
    for (var i = 0; i < this.squad.length; i++) {
        if (this.squad[i].isReadyToMove() === false) {
            return false;
        }
    }
    return true;
}
Squad.prototype.areReadyToFight = function () {
    for (var i = 0; i < this.squad.length; i++) {
        if (this.squad[i].isReadyToFight() === false) {
            return false;
        }
    }
    return true;
}
Squad.prototype.restoreAll = function () {
    for (let i = 0; i < this.squad.length; i++) {
        this.squad[i].restore();
    }
}