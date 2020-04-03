

function appendPropetry(el, props) {
    var classes = props.classes;
    var style = props.style;
    delete props.classes;
    delete props.style;


    if (classes) {
        el.className = classes.join(' ');
    }

    if (style) {
        for (const key in style) {
            if (style.hasOwnProperty(key)) {
                const value = style[key];
                el.style[key] = value;

            }
        }
    }


    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const value = props[key];
            el.setAttribute(key, value);
        }
    }

    return el
}

function element(elementName, props, children) {
    var el = document.createElement(elementName);
    (children || []).forEach(function (childrenElement) {
        el.append(childrenElement)
    });
    return appendPropetry(el, props || {});
}

function createChampion() {
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
        avatar = element('div', { classes: ['avatar-block',] });
    var card = element('div', {
        classes: ['card-wrapper']
    },
        [health, stamina, avatar]
    );

    return {
        healthInner: healthInner,
        staminaInner: staminaInner,
        health: health,
        stamina: stamina,
        avatar: avatar,
        el: card
    };

    parent.append(card);
}

function createBoss() {
    var healthInner = element('div', {
        classes: ['health-inner two', 'inner'],
        style: {
            width: '100%'
        }
    });
    var staminaInner = element('div', {
        classes: ['stamina-inner two', 'inner'],
        style: {
            width: '100%'
        }
    });
    var health = element('div', { classes: ['health-bar two'] }, [healthInner]),
        stamina = element('div', { classes: ['stamina-bar two'] }, [staminaInner]),
        avatar = element('div', { classes: ['avatar-block two',] });
    var card = element('div', {
        classes: ['card-wrapper two']
    },
        [health, stamina, avatar]
    );

    return {
        healthInner: healthInner,
        staminaInner: staminaInner,
        health: health,
        stamina: stamina,
        avatar: avatar,
        el: card
    };

    parent.append(card);
}