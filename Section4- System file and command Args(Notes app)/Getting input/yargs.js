//Yarg is a command-line interface (CLI) tool for Node.js that makes it easy to create command-line interfaces (CLIs) for your Node.js applications.
//Yargs provides a simple way to define command-line options and arguments, and it automatically handles the parsing of the command-line arguments and provides a convenient way to access the values of the options and arguments.
import chalk from "chalk"; 
import yargs from "yargs";
import getNotes from "./notes.js";
// Required in ES modules
import { hideBin } from "yargs/helpers"; 

// console.log(process.argv);

// console.log(yargs(hideBin(process.argv)).argv);
//Create add command:
yargs(hideBin(process.argv))
  .command(
    "add",
    "Add a new note",
    (yargs) => {
      return yargs.option("title", {
        describe: "Note title",
        demandOption: true,
        type: "string",
      });
    },
    (argv) => {
      console.log(`Note added with title: ${argv.title}`);
    }
  )
  .help()
  .argv;
//add ,remove, read, list

//Now that we have yargs, we can define our command-line options and arguments.
//For example, we can define an option called "add" that takes a note as an argument.