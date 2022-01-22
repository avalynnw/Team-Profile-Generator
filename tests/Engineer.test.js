const Engineer = require("../lib/engineer")


describe("Engineer", () => {

    describe("Initialization", () => {
        it("should create an object with a 'name', 'employee id number', 'email', and 'GitHub' username", () => {
            const employee = new Engineer("avalynn", 2, "avalynnhelgrave@fakemail.com","avalynnw");
            expect(employee).toEqual({name: "avalynn", id: 2, email: "avalynnhelgrave@fakemail.com", github: "avalynnw"});
        });
    });

    describe("getGitHub", () => {
        it("should return the engineer's GitHub username", () => {
            const employee = new Engineer("avalynn", 2, "avalynnhelgrave@fakemail.com","avalynnw");
            expect(employee.getGitHub()).toEqual("avalynnw")
        });
    });

    describe("getRole", () => {
        it("should return the employee's email address", () => {
            const employee = new Engineer("avalynn", 2, "avalynnhelgrave@fakemail.com","avalynnw");
            expect(employee.getRole()).toEqual("Engineer")
        });
    });
});