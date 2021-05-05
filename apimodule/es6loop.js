//Definite & indefinite loops 

//for( ; ; ) Loop	It executes the block of code for a definite number of times.
var i;
for(i=1;i<5;i++){
    console.log(i);
}
console.log('------------------FOR IN----------------------------');
//The for…in loop    It iterates through the properties of an object . Mainly used for Objects & Dictionaries based on their properties

function SmartPhone(model_no){
    this.Model=model_no;
    this.Color="2GB";
    this.Ram='4GB';
}

var vivo= new SmartPhone(1712);
for(var props in vivo){
    console.log(props+"  "+vivo[props]);
}

console.log('-----------------FOR OF-----------------------------');
//The for…of loop       this loop is used to iterate the iterables (arrays, string, etc.).

var mycolors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];    
for (let x of mycolors){
    console.log(x);
}

//End
console.log('---------------------continue loop1-------------------------');

//Label with continue statement
var x, y;  
  
loop1:   //The first for statement is labelled as "loop1"  
for (x = 1; x < 4; x++) {       
   loop2:  //The second for statement is labelled as "loop2"  
   for (y = 1; y < 4; y++) {     
      if (x === 2 && y === 2) {  
         continue loop2;  
      }  
      console.log('x = ' + x + ', y = ' + y);  
   }  
} 

console.log('-------------------IF ELSE---------------------------');
//IF -- ELSE
var a = 10, b = 20, c = 30;   
if( a > b && a > c) {   
   console.log("a is greater");   
} else if( b > a && b > c ) {   
    console.log("b is greater");   
} else {   
    console.log("c is greater");   
}  


(()=>console.log("I am checking jenkins"))();