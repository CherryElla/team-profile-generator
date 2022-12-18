const Intern = require("../lib/intern")

describe("Intern",() => {
    describe("Start Test", () => {
        it("should initialize and provide a valid school string", () => {
            let name = "Tom";
            let id = 2
            let email = "dfdf@dfjj"
            let role = "Intern"
            let school = "Davidson School"

            let intern = new Intern(name,id,email,school)

            expect(intern.name).toEqual(name)
            expect(intern.id).toEqual(id)
            expect(intern.email).toEqual(email)
            expect(intern.getRole()).toEqual(role)
            expect(intern.getSchool()).toEqual(school)
        })
        it("give an error if value of school is given is not a string", () => {
            let callback = () =>{
                new Intern()
            }
            let error = new Error("Expected to be a string")
            expect(callback).toThrowError(error)
    })
    
})
})