// /// Problematic case
// // 
// function getEmpoyeeSalary(id) {
//     console.log("Add function invoked");
// 	
//     //server side call
// 	setTimeout(function() {
// 		var salary="100";
//         return salary;
// 		
//     }, 5000);
//     console.log("End of function");
// }
// 
// function Employee() {
// }
// 
// Employee.prototype.add = function(a, b) {
//     var id=1;
//     var data = getEmpoyeeSalary(id);
// 	
//     console.log("Add salary = " + data + 100);
// }
// 
// var obj = new Employee();
// obj.add(3, 4);




/// Solution


function getEmpoyeeSalary(id,callBack) {
    console.log("Add function invoked");
	
    //server side call
	setTimeout(function() {
		var salary=200;
        callBack.call(null,salary);
		
    }, 5000);
    console.log("End of function");
}

function Employee() {
}

Employee.prototype.get = function(id) {
    
    getEmpoyeeSalary(id,function(result){
		console.log(result + 100);
	});
	
}

var obj = new Employee();
obj.get(3);
