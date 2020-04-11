var wrapper = document.getElementById('wrapper');


get('https://api.pokemontcg.io/v1/cards/')
    .then(function (data) {
        var arrayofCards = data.cards.map(function (cards) {
            var c = new champion(cards.name, 200, 100);
            c.setImage(cards.imageUrl);
            return c
        });

        arrayofCards.forEach(function (champ) {
            champ.render(wrapper)
        });
    })



