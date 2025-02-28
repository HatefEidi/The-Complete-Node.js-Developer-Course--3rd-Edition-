// We search for the package by searching nodemon in npm text search bar and then we install it using npm install nodemon in terminal. 
// The only difference is the installation of nodemon, we install it globally using npm install -g nodemon in terminal.
//Further, when we install it we see that our package.josn and package-lock.json files are not updated, because the package is installed on our device itself.
// Now, to make sure that our package is installed globally, we can use the command nodemon -v in terminal, if we see the error, that might be because of the execution policy which we can change in powershell or command prompt.
// We can change the execution policy by using the command Set-ExecutionPolicy RemoteSigned or unrestricted in terminal, this will allow us to run the nodemon command.
//Now that is installed and we can see the version we can use nodemon app.js instead of node app.js

import chalk from 'chalk';

console.log(chalk.green.inverse.bold("Success"));

console.log(chalk.red.inverse.bold("Error!"));


//If you want to terminate the nodemon, you can head back to terminal and press ctrl+c.