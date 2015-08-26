var callbackInvoker = function (func) {
    func.call(this);
}

var person = function(name, age) {
    var self = this;
    this.pName = name;
    this.pAge = age;
    this.displayInfo = function() {
        //console.log("Hi! I am " + this.pName + " and I am " + this.pAge + " years old.");
        console.log("Hi! I am " + self.pName + " and I am " + self.pAge + " years old.");
    }
}

var p1 = new person("Bill", 40);
var p2 = new person("Steve", 50);
this.pName = "unknown";
this.pAge = -1;

p1.displayInfo();
p2.displayInfo();

 
callbackInvoker(p1.displayInfo);