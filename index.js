const inquirer = require("inquirer")

const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "Team Manager's name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Employee ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Employee email: ",
            name: "email"
        },
        {
            type: "input",
            message: "Employee office number: "
        },
        
    ])
    .then((input) => {
        generateHTML("index.html", input)
    })


function generateHTML(fileName, data) {
    fs.appendFile(file)
}


