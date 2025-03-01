console.log("utils.js")

const name="Hatef Eidi"

const add = function (a, b){
    return a + b;
}

//Before we export name variable, we get an error when trying to run the Improting your own Files.js file, because name variable is not visible by Importing your own Files.js, we need to export it from utils.js file, we can use the module.exports keyword to export the variable.
//Because name variable is not visible by Importing your own Files.js, we need to export it from utils.js file, we can use the module.exports keyword to export the variable.
module.exports = name;
module.exports = add
