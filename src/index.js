import hashMap from "./hashMap";
// import HashSet from "./hashSet";

console.log('woooorrrkkk time!!!');

const test = new hashMap(0.75, 16)

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('ice cream', 'vanilla')
test.set('lion', 'churro')

console.log(test.get('hat'));
console.log(test.has('hat'));
// console.log(test.remove('hat'));
// console.log(test.has('hat'));
// console.log(test.clear());

console.log(test.length());
console.log(test.capacity);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.map);





