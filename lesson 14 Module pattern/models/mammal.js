var Mammal = (function (_super) {
    function Mammal() {
        _super.call(this)
    };

    Mammal.prototype = Object.create(Animal.prototype);
    Mammal.prototype.constructor = Mammal;

    Mammal.prototype.giveMilk = function () {
        if (this.gender === 'female') {
            return true
        }

        if (this.gender === 'male') {
            return false
        }
    }
    return Mammal;
})(Animal);