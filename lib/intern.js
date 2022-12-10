class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = getSchool()
        this.role = "Intern"
    }
}