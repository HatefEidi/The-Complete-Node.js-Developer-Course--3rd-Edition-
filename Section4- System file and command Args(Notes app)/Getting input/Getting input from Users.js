import chalk from 'chalk';
import getNotes from './notes.js';

// const msg = getNotes();

// console.log(msg);

// const greeting=chalk.blue.inverse.bold("Success!");

// console.log(greeting);

//the process object is a global object that provides information about the current Node.js process and its environment.
//The process.argv property returns an array containing the command line arguments passed to the Node.js process.
//The first element of the array is the path to the Node.js executable, and the subsequent elements are the command line arguments passed to the script.
//The process.argv property is useful for writing command-line utilities that can accept arguments from the command line.
//The process.argv property is also useful for writing Node.js applications that can be run from the command line.

// console.log(process.argv[2]);

//In this example if I type node Getting input from Users.js "Hello" in the command line, it will print "Hello" to the console.

const command = process.argv[2];

if (command === "add") {
    console.log("Adding notes!");
}
else if (command === "remove") {
    console.log("Removing notes!");
}