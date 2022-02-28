name = 'Tre Mckendree';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Tre Mckendree';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['apple', 'orange', 'strawberry'];
function printFruits() {
    let favFruit = fruits[2];
    let leastfavfruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

    function printleastfavfruits() {
        console.log(leastfavfruit)
    }
}
printFruits();

let names = ['john','terry','will','jack','dan']
let bestFriend;
function printNames(){
    bestFriend = names[3];
    console.log(names[0])
}
function printBestFriend(){
    console.log(bestFriend)
}
printNames()
printBestFriend()