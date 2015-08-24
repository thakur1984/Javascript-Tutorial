function Employee(name,qualification,panCard){
    this.firstName=name;
    this.qualification=qualification;
    this.Pancard=panCard;
    this.displayName=function(){
        console.log("My name is: " + this.firstName);
    }
    
    this.getQualification=function(){
        console.log("My qualification is: "+qualification);
    }
}
var employee=new Employee("Raman","MCA","ac5151b");
Employee.prototype.getPanCard=function(){
 console.log("Pan card of employee:" + this.firstName + " is :" + this.Pancard );
}
employee.displayName();
employee.getQualification();
employee.getPanCard();