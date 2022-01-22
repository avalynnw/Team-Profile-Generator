const Employee = require("../lib/employee")


describe("Employee", () => {

    describe("Initialization", () => {
        it("should create an object with a 'name', 'employee number', and 'email'", () => {
            const employee = new Employee("avalynn", 2, "avalynnhelgrave@fakemail.com");
            expect(employee).toEqual({name: "avalynn", id: 2, email: "avalynnhelgrave@fakemail.com"});
        });
    });

    describe("getName", () => {
        it("should return the employee's name", () => {
            const employee = new Employee("avalynn", 2, "avalynnhelgrave@fakemail.com");
            expect(employee.getName()).toEqual("avalynn")
        });
    });

    describe("getId", () => {
        it("should return the employee's ID number", () => {
            const employee = new Employee("avalynn", 2, "avalynnhelgrave@fakemail.com");
            expect(employee.getId()).toEqual(2)
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("avalynn", 2, "avalynnhelgrave@fakemail.com");
            expect(employee.getEmail()).toEqual("avalynnhelgrave@fakemail.com")
        });
    });

    describe("getRole", () => {
        it("should return the employee's email address", () => {
            const employee = new Employee("avalynn", 2, "avalynnhelgrave@fakemail.com");
            expect(employee.getRole()).toEqual("Employee")
        });
    });
});