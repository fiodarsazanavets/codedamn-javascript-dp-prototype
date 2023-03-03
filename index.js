const CloneableObject = require('./cloneableObject.js');

var object1 = new CloneableObject('Title 1');

console.log(`Object 1 title: ${object1.getTitle()}`);
console.log(`Object 1 data: ${object1.getData()}`);

var object2 = new CloneableObject('Title 2');

console.log(`Object 2 title: ${object2.getTitle()}`);
console.log(`Object 2 data: ${object2.getData()}`);