var champ = new champion('Hunter', 300, 100);
var enemy = new boss('Logarius', 500, 300);
var wrapper = document.getElementById('wrapper');
console.log(champ);
console.log(enemy);


champ.render(wrapper);
enemy.render(wrapper);


setInterval(function () {
    enemy.damage(10)
}, 2000);