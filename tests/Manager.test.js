const Manager = require("../lib/manager")

describe("Manager", () => {

    describe("Initialization", () => {
        it("should create an object with a 'name', 'employee id number', 'email', and office number", () => {
            const employee = new Manager("avalynn", 2, "avalynnhelgrave@fakemail.com", 13 );
            expect(employee).toEqual({name: "avalynn", id: 2, email: "avalynnhelgrave@fakemail.com", office_number: 13});
        });
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const employee = new Manager("avalynn", 2, "avalynnhelgrave@fakemail.com","avalynnw");
            expect(employee.getRole()).toEqual("Manager")
        });
    });
});