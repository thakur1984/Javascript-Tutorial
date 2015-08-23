(function () {
  
   //By default two paremters pass to function this and arguments
   console.log("By default two paremters pass to function this and arguments");
   function windowScope(){
     
     console.log(arguments.length);
     console.log(this);
     }
     windowScope(1,2);
     
     console.log("End of Function context tutorial");



})();

