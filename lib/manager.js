import Employee from "./employee.js"

export default class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNumber = officeNum    
    }
    getRole() {
        return "Manager"
    }
}

