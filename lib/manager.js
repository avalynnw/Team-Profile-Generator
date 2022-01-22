const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, office_number) {
        super(name, id, email)
        this.office_number = office_number;
    }
}

Manager.prototype.print_info = function() {
    console.log(`Name: ${this.name}`)
    console.log(`ID: ${this.id}`)
    console.log(`Email: ${this.email}`)
    console.log(`Office #: ${this.office_number}`)
}

Manager.prototype.getRole = function() {
    return "Manager";
}


module.exports = Manager;