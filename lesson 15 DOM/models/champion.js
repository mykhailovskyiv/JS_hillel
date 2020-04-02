var champion = (function () {
    function champion(title, health, stamina) {
        this.title = title;
        this.maxHealth = this.health = health;
        this.maxStamina = this.stamina = stamina;
    }
    return champion
})();