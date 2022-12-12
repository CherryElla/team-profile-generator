const inquirer = require("inquirer")

const fs = require("fs")

const start = () =>{
    inquirer
    .prompt([
        {
            type: "input",
            message: "Welcome, please enter your Team Manager's name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter employee's ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter employee's email: ",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter employee's office number: ",
            name: "officeNo"
        },
        {
            type: "list",
            message: "Would you like to add another employe?",
            choices: ["Add Intern", "Add Engineer", "Finish team building"],
            name: "addEmployee"
        },
        
    ])
    .then((input) => {
        if(input.addEmployee === "Add Intern") {
            addIntern()
    }
    else if(input.addEmployee === "Add Engineer"){
        addEngineer()
    } else {
        generateHTML();
    }
    });
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter your Intern's name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter employee's ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter employee's email: ",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter employee's school: ",
            name: "school"
        },
        {
            type: "list",
            message: "Would you like to add another employe?",
            choices: ["Add Engineer", "Finish team building"],
            name: "addEmployee"
        },
    ])
    .then((input) => {
        if(input.addEmployee === "Add Enginner") {
            addIntern()
    }
    else {
        generateHTML()
    }
})
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter your Engineer's name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter employee's ID: ",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter employee's email: ",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter employee's GitHub user: ",
            name: "github"
        },
        {
            type: "list",
            message: "Would you like to add another employe?",
            choices: ["Add Intern", "Finish team building"],
            name: "addEmployee"
        }, 
    ])
    .then((input) => {
        if(input.addEmployee === "Add Intern") {
            addIntern()
    }
    else {
        generateHTML()
    }
})
}

function generateHTML(fileName, data) {
    fs.appendFile(file)
}


start()