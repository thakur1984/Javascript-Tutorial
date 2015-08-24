function Employee (name,qualification,panCard) {
    this.firstName=name;
    this.qualification=qualification;
    this.panCard=panCard;
    
    this.displayName= function () {
        console.log("My name is: " + this.firstName);
    }
    
    this.getQualification=function(){
        console.log("My qualification is: "+this.qualification);
    }
    
    this.getPanCard=function () {
        console.log("Pan card of employee:" + this.firstName + " is :" + this.panCard );
}

}

var employee = new Employee("Raman","MCA","ac5151b");
employee.displayName();
employee.getQualification();
employee.getPanCard();
