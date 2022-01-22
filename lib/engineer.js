const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
}

Engineer.prototype.print_info = function() {
    console.log(`Name: ${this.name}`)
    console.log(`ID: ${this.id}`)
    console.log(`Email: ${this.email}`)
    console.log(`GitHub: ${this.github}`)
}

Engineer.prototype.getGitHub = function() {
    return this.github;
}

Engineer.prototype.getRole = function() {
    return "Engineer";
}


module.exports = Engineer;


