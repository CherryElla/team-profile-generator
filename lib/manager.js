class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, "Team Manager")
        this.officeNum = officeNum    
    }

    getRole() {
        return "Manager"
    }
}

// module.exports = Manager