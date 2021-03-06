

function Employee(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (typeof id !== "number" || isNaN(id) || id < 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number");
    }
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return "Employee";
}


module.exports = Employee;