var wrapper = document.getElementById('wrapper');

var form = document.getElementById('filter-form');




form.addEventListener('submit', function (e) {
    var input = this.elements.championID

    console.log(input.value)
    e.preventDefault();
})



    
get('https://api.pokemontcg.io/v1/cards/', function (data) {
    var arrayofCards = data.cards.map(function (cards) {
        var c = new champion(cards.name, 200, 100);
        c.setImage(cards.imageUrl);
        return c
    });

    arrayofCards.forEach(function (champ) {
        champ.render(wrapper)
    });
});


