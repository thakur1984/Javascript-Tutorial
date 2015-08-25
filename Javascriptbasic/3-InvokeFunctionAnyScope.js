function Employee(){
	this.pancard="Employee";
}
var emp=new Employee();

function SelfEmployee(){
	this.pancard="Self Employee";
}

function getPancard(){
	console.log("Get pan card of :" + this.pancard);
}

var self=new SelfEmployee();

getPancard.call(emp);
getPancard.call(self);

