const Intern = require("../lib/intern")


describe("Intern", () => {

    describe("Initialization", () => {
        it("should create an object with a 'name', 'employee id number', 'email', and 'school", () => {
            const employee = new Intern("avalynn", 2, "avalynnhelgrave@fakemail.com","UW");
            expect(employee).toEqual({name: "avalynn", id: 2, email: "avalynnhelgrave@fakemail.com", school: "UW"});
        });
    });

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const employee = new Intern("avalynn", 2, "avalynnhelgrave@fakemail.com","UW");
            expect(employee.getSchool()).toEqual("UW")
        });
    });

    describe("getRole", () => {
        it("should return the employee's email address", () => {
            const employee = new Intern("avalynn", 2, "avalynnhelgrave@fakemail.com","UW");
            expect(employee.getRole()).toEqual("Intern")
        });
    });
});