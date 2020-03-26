var Coon = (function (_super) {

    function Coon() {
        _super.call(this)
    };

    Coon.prototype = Object.create(Mammal.prototype);
    Coon.prototype.constructor = Coon;

    Coon.prototype.thief = function () {
        console.log("im thief");
    };
    return Coon;
})(Mammal);