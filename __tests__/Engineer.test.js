const Engineer = require("../lib/engineer")

describe("Engineer",() => {
    describe("Start Test", () => {
        it("should initialize and have a valid GitHub", () => {
            let name = "Tom";
            let id = 2
            let email = "dfdf@dfjj"
            let role = "Engineer"
            let github = "TomHarry"

            let engineer = new Engineer(name, id, email, github)

            expect(engineer.name).toEqual(name)
            expect(engineer.id).toEqual(id)
            expect(engineer.email).toEqual(email)
            expect(engineer.getRole()).toEqual(role)
            expect(engineer.getGithub()).toEqual(github)
        })
        // it("should give an error if no name was given", () => {
        //     let callback = () => { 
        //         new Engineer()
        //     }
        //     let error = new Error(
        //         "Please enter a valid name."
        //     ) 
        //     expect(callback).toThrowError(error)
        // })
        it("should give an error if no GitHub value is given", () => {
            let callback = () => {
                new Engineer("Harry")
            }
            let error = new Error("Please enter a valid GitHub")
            expect(callback).toThrowError(error)
        })
    })
    
})