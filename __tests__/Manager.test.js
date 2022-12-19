// import Manager from "../lib/manager.js"
const Manager = require('../lib/manager')


describe("Manager",() => {
    it("should initialize and have a Manager role", () => {
        let name = "Tom";
        let id = 2
        let email = "dfdf@dfjj"
        let role = "🗣 Manager"
        let officNumb = 3434

        let manager = new Manager(name, id, email, officNumb)

        expect(manager.name).toEqual(name)
        expect(manager.id).toEqual(id)
        expect(manager.email).toEqual(email)
        expect(manager.getRole()).toEqual(role)
        expect(manager.officeNumber).toEqual(officNumb)
    })
    it("should give an error if no 'name' value given", () => {
        let cb = () => {
            new Manager()
        }
        let error = new Error(
            "Please enter a valid name."
        )
        expect(cb).toThrowError(error)
    }) 
})