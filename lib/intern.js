const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
}


Intern.prototype.print_info = function() {
    console.log(`Name: ${this.name}`)
    console.log(`ID: ${this.id}`)
    console.log(`Email: ${this.email}`)
    console.log(`School: ${this.school}`)
}

Intern.prototype.getSchool = function() {
    return this.school;
}

Intern.prototype.getRole = function() {
    return "Intern";
}



module.exports = Intern;