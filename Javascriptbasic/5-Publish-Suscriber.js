var NewsLetter = function(type) {
	this.date = new Date();
	this.title = type;
}

function Basware ()
{
	var self=this;
	this.suscriberList={
		"HR":[],
		"Finance":[]
	};
	
	this.newsLetter={
		date:new Date(),
		title:Math.random()
	}
	
	this.registerEvent=function(name,callBack){
	   this.suscriberList[name].push(callBack);
	}
	
	
	  setInterval(function() {
		  var hrNewsLetter  = new NewsLetter("HR");
		  var financeNewsLetter = new NewsLetter("Finance");
		  for(var index=0;index< self.suscriberList.HR.length;index++)
		  {
			 self.suscriberList.HR[index].call(null,hrNewsLetter)	  
		  }
		  
		   for(var index=0;index< self.suscriberList.Finance.length;index++)
		  {
			 self.suscriberList.Finance[index].call(null,financeNewsLetter);	  
		  }
        
		
    }, 5000);
	
}

var employer=new Basware();

function Employee(name){
	this.eName=name;
}

Employee.prototype.register=function(eventName,callback){
	employer.registerEvent(eventName,callback);
	}

var employee1=new Employee("Raman");

 employee1.register("HR",function(newsLetter){
	 	console.log(employee1.eName);
		console.log("Title : " + newsLetter.title +" Date of Publishing: " + newsLetter.date);
	});
	
var employee2=new Employee("Navkirat");

 employee2.register("HR",function(newsLetter){
	 	console.log(employee2.eName);
		console.log("Title : " + newsLetter.title +" Date of Publishing: " + newsLetter.date);
	});
	
	 employee2.register("Finance",function(newsLetter){
		 console.log(employee2.eName);
		console.log("Title : " + newsLetter.title +" Date of Publishing: " + newsLetter.date);
	});
	
 
	
 

