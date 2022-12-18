// import Employee from "./employee.js"
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        if(typeof school !== "string" || school.length < 3) {
            throw new Error("Expected to be a string")
        }
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
module.exports = Intern