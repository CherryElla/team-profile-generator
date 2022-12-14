import jest from "jest";
import Employee from "../lib/employee.js"

describe("Employee", () => {
    describe("Start Test", () => {
        it("should initialize and have an employee role", ()  => {
            let name = "Harry";
            let id = "rrr";
            let email = "test@test.com";
            let role = "manager"
            
            let employee = new Employee(name, id, email)

            expect(employee.name).toEqual(name)
            expect(employee.id).toEqual(id)
            expect(employee.email).toEqual(email)
            expect(employee.role).toEqual(role)
        })
        it("should give an error if no 'name' value given", () => {
            let cb = () => new Employee()
            let error = new Error(
                "Should have string in parameter"
            )
            expect(cb).toThrowError(error)
        })
    })
} )