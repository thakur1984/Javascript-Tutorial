function Employee () {
	//private variable
	var salary=0;
	this.name="Uday Thakur";
	this.DisplayName=function(){
		console.log(this.name);
	}
	
}
var emp1=new Employee();
var emp2=new Employee();
if(emp1==emp2)
{
	console.log("both are equal");
}
else
{
	console.log("both are not equal");
}
console.log(emp1 instanceof Employee);