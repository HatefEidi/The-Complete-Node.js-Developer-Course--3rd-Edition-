//The first argument is the name of the file, and the second argument is the text within the file.
//We need to require the fs module to write to the file.
//When we require the fs object, we can access it's writeFileSync method.

//We are going to use the documentation of https://nodejs.org/api/fs.html
const fs = require('fs');

//Now we can use the writeFileSync method to write to the file.
fs.writeFileSync('notes.txt', ' My name is Hatef Eidi');

//Now we are going to append some text to the existing files, we can use the appendFileSync method, Which will add some text to the same file.
fs.appendFileSync('notes.txt', '\nI am a software developer');