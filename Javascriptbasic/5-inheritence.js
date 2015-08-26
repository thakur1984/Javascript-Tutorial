function Person(name) {
    this.pName = name;
}

Person.prototype.displayName = function() {
    console.log("Hi! My name is " + this.pName);
}

function Employee(name, organization) {
    Person.call(this, name);
    this.organization = organization;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.displayInfo = function() {
    this.displayName();
    //Person.prototype.displayName.call(this);
    console.log("I work at " + this.organization);
}

var p1 = new Person("Bill");
var e1 = new Employee("Steve", "Apple");

p1.displayName();
e1.displayName();
e1.displayInfo();
