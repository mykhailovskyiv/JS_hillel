var Animal = (function (gender, moveTypes) {
    function Animal() {
        this.gender = gender || 'female';
        this.moveTypes = moveTypes || 'Jump, Run';
    };

    Animal.prototype.jump = function () {
        console.log('Jumping')
    };

    Animal.prototype.run = function () {
        console.log('Running');
    };
    return Animal
})();