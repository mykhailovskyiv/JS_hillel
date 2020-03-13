// var races = {
//     wizard: "Wizard",
//     elf: "Elf",
//     dwarf: "Dwarf"
// };

// var weapons = {
//     sword: "Sword",
//     axe: "Axe",
//     bow: "Bow"
// };

// var moveTypes = {
//     jump: "Jump",
//     fly: "Fly",
//     walk: "Walk"
// };

// var attackTypes = {
//     mellee: [weapons.sword, weapons.axe],
//     range: [weapons.bow]
// };

// var creatures = [
//     {
//         type: races.wizard,
//         level: 10,
//         weapon: weapons.sword,
//         moveType: moveTypes.fly
//     },
//     {
//         type: races.dwarf,
//         level: 10,
//         weapon: weapons.sword,
//         moveType: moveTypes.walk
//     },
//     {
//         type: races.elf,
//         level: 10,
//         weapon: weapons.bow,
//         moveType: moveTypes.fly
//     }
// ]

// console.log(creatures)

// creatures.forEach(function (creature) {
//     if (creature.level >= 2) {
//         console.log('im ready');
//     }
// });

// var raceList = creatures.map(function (creature) {
//     return creature.races;
// });

// var readyCreature = creatures.filter(function (creature) {
//     return creature.level >= 2;
// });

// var findCreature = creatures.find(function (creature) {
//     return creature.level > 5;
// });

// var melleeAttack = creatures.filter(function (creature) {
//     return attackTypes.mellee.find(function (attackType) {
//         return creature.weapon === attackType;
//     });
// });

// console.log(findCreature);
// console.log(melleeAttack);

// function Creature(reace, level, )
