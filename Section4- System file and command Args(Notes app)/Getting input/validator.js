//when we have installed validator.js library using npm install validator in terminal, we can call it and store it in a variable.
const validator = require('validator');


//For seeing all the available functions of validator.js library we can head to the website and all the functions are available.
console.log(validator.isEmail("andrew@example.com"));console.log(validator.isEmail("example.com"));


console.log(validator.isURL('https://mead.io'));console.log(validator.isURL('https:/mead.io'));