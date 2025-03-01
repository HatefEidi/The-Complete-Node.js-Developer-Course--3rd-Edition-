//We want to use the code in utils.js on this file. We need to require the utils.js module to use it.
const fullName = require('./utils.js');
const add = require('./utils.js');
const notes = require('./notes.js');


//Be mindful that because we required before console,log(name) on this file, it will show up earlier before the name Hatef, so everything in file utils.js will be printed before the name Hatef.

const sum = add(5, 10);
console.log(sum);

console.log(fullName)




//Challenge:
//Define and use a function in a new file named notes.js
//Create getNotes function that returns "Your notes..."
// export getNotes function
//from app.js load in and all the function printing message to console

const msgFromNote = notes();
console.log(msgFromNote);
console.log(notes());