const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = getGithub()
        this.role = "Engineer"
    }
}

module.exports = Engineer