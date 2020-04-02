var champ = new champion('Dwarf', 200, 100);
var wrapper = document.getElementById('wrapper');
console.log(champ);

function createChampion(champ, parent) {
    var healthInner = element('div', {
        classes: ['health-inner', 'inner'],
        style: {
            width: '100%'
        }
    });
    var staminaInner = element('div', {
        classes: ['stamina-inner', 'inner'],
        style: {
            width: '100%'
        }
    });
    var health = element('div', { classes: ['health-bar'] }, [healthInner]),
        stamina = element('div', { classes: ['stamina-bar'] }, [staminaInner]),
        avatar = element('div', { classes: ['avatar-block'] });
    var card = element('div', {
        classes: ['card-wrapper']
    },
        [health, stamina, avatar]
    );

    health.addEventListener('click', function () {
        champ.health = champ.health - champ.maxHealth * 0.1;
        var percent = (champ.health / champ.maxHealth) * 100;
        healthInner.style.width = percent + '%';
    });

    stamina.addEventListener('click', function () {
        champ.stamina = champ.stamina - champ.maxStamina * 0.1;
        var percent = (champ.stamina / champ.maxStamina) * 100;
        staminaInner.style.width = percent + '%';
    });

    parent.append(card);
}

createChampion(champ, wrapper);