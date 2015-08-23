function numberCounter() {
var result = 0;
for (var n = 0; n < arguments.length; n++) {
	result += arguments[n];
}
this.result = result;
}
var number1 = {};
var number2= {};
numberCounter.apply(number1,[1,2,3,4]);
numberCounter.call(number2,5,6,7,8);
if(number1.result === 10){console.log("juggled via apply")};
if(number1.result === 10){console.log("juggled via call")};