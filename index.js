const inquirer = require("inquirer");
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const {TESTDATA, generateHTML} = require("./src/render")


// const fs = require("fs");

let employees = {
    manager: null,
    interns: [],
    engineers: []
}

const start = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Welcome, please enter your Team Manager's name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter employee's ID: ",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter employee's email: ",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter employee's office number: ",
                name: "officeNo",
            },
            {
                type: "list",
                message: "Would you like to add another employe?",
                choices: ["Add Intern", "Add Engineer", "Finish team building"],
                name: "addEmployee",
            },
        ])
        .then((input) => {
            let manager = new Manager(input.name, input.id, input.email, input.officeNo)
            employees.manager = manager
            menuChoice(input.addEmployee)
        });
};

const menuChoice = (choice) => {
    console.log(choice)
    console.log(employees)
    if (choice === "Add Intern") {
        addIntern();
    } else if (choice === "Add Engineer") {
        addEngineer();
    } else {
        generateHTML("index.html", employees);
    }
};

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter your Intern's name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter employee's ID: ",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter employee's email: ",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter employee's school: ",
                name: "school",
            },
            {
                type: "list",
                message: "Would you like to add another employe?",
                choices: ["Add Intern", "Add Engineer", "Finish team building"],
                name: "addEmployee",
            },
        ])
        .then((input) => {
            let intern = new Intern(input.name, input.id, input.email, input.school)
            employees.interns.push(intern)
            menuChoice(input.addEmployee)
        });
};

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter your Engineer's name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter employee's ID: ",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter employee's email: ",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter employee's GitHub user: ",
                name: "github",
            },
            {
                type: "list",
                message: "Would you like to add another employe?",
                choices: ["Add Intern", "Add Engineer", "Finish team building"],
                name: "addEmployee",
            },
        ])
        .then((input) => {
            let engineer = new Engineer(input.name, input.id, input.email, input.github)
            employees.engineers.push(engineer)
            menuChoice(input.addEmployee)
        });
};



start();
// generateHTML("index.html", TESTDATA)
