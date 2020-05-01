var champion = (function () {
    function champion(title, health, stamina) {
        this.title = title;
        this.elements = createChampion()
    }

    champion.prototype.setImage = function (imageSrc) {
        this.elements.avatarImage.src = imageSrc;
    }

    champion.prototype.render = function (parent) {
        parent.appendChild(this.elements.el);
    };

    return champion
})();