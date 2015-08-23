//Scope and variable hoisting declared with var but not intialization,
//always use intialization at top of function 
//recomendation first line of function.

console.log("Scope and hoisting");
var global=6;
function outer(){
	var a = 1;//actually all variable declare in function hoist to first line like var a,b,c
	
	//variable hoisting
	b=10;
	console.log(b);
	
	//function hoisting
	inner();
	
	function inner(){
		var e ="inner";
		console.log("function hoisting: "+ e);
		
	};
	
	//console.log("Not able to get inner function due to function scope"+ e);
	
	var b;
	
	if (a == 1) {
		var c = 3;
		
		}
		
		console.log("bracket will not create scope "+c);
		
		console.log("bracket will not create scope "+ global);

}
outer();
console.log("end of Scope and hoisting");