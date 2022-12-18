// import Employee from "./employee.js"
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        if(typeof github !== "string") {
            throw new Error("Please enter a valid GitHub")
        }

        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer