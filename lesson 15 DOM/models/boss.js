var boss = (function (_super) {
    function boss(title, health, stamina) {
        _super.call(this, title, health, stamina)
        this.elements = createBoss()
    };


    boss.prototype = Object.create(champion.prototype);
    boss.prototype.constructor = boss;
    return boss;
})(champion);