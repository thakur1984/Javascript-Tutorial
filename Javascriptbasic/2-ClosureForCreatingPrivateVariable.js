function Employee (){
    var salary=100;
    this.getSalary=function(){
     return salary;   
    }
    
    this.setSalaryHike= function(){
          salary= salary+100;   
    }
    
}

var emp=new Employee();
console.log("salary of employee: "+ emp.getSalary());
emp.setSalaryHike();
console.log("salary of employee after hike: "+ emp.getSalary());
