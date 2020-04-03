var champion = (function () {
    function champion(title, health, stamina) {
        this.title = title;
        this.maxHealth = this.health = health;
        this.maxStamina = this.stamina = stamina;
        this.elements = createChampion()
        this.initListeners();
    }



    champion.prototype.initListeners = function () {
        var self = this;
        this.elements.health.addEventListener('click', function () {
            self.damage(10);
            if (self.health === 0) {
                var cardWrapDiv = event.target.closest('.cardWrapper');
                cardWrapDiv.remove();
            }
        });

        this.elements.stamina.addEventListener('click', function () {
            self.move(10);
        });
    }

    champion.prototype.damage = function (by) {
        this.health = this.health - this.maxHealth * (by / 100);
        this.repaint();
    };

    champion.prototype.move = function (by) {
        this.stamina = this.stamina - this.maxStamina * (by / 100);
        this.repaint();
        if (this.stamina < 10) {
            this.restore();
        }
    };

    champion.prototype.restore = function () {
        this.health = this.maxHealth;
        this.stamina = this.maxStamina;
        this.repaint();
    }

    champion.prototype.repaint = function () {
        this.elements.healthInner.style.width = percentCalculate(this.health, this.maxHealth) + '%';
        this.elements.staminaInner.style.width = percentCalculate(this.stamina, this.maxStamina) + '%';
    }

    champion.prototype.render = function (parent) {
        parent.appendChild(this.elements.el);
    };

    return champion
})();