console.log('------------------Function initialization of parameters with default values----------------------------');
//In ES6, the function allows the initialization of parameters with default values if the parameter is undefined or no value is passed to it.
function sayhi(v1,v2,v3=5){
    console.log(`Addition of Parameters ${v1+v2+v3}`);
}

sayhi(2,0);

console.log('------------------Function REST PARAMETER----------------------------');
let globalvalue;
const checkvalue=91;
function chantnow(v1,...v2){
    console.log(`Addition of Parameters v1: ${v1} , v2: ${v2} & sum=  ${v1+v2}`);

   // iteration of array   
   for (let x of v2){
        
            var ifcheck=function(){
            if(x==checkvalue){

                //autoboxing 
                var holdvalue=Number(addtwo(Number(v1),x));
                console.log(`after multiplication = ${holdvalue*1000}`);
                globalvalue=holdvalue;

            }
        }
        ifcheck();

        //var betterifcheck = new function('')
        
   }
}

chantnow(50,24,68,91,43,35,17);


function addtwo(v1,...obj){
    console.log('------------------Function RETURNING with typecast----------------------------');
    var hello = function() { //  anonymous function created 
       // console.log('Hello World');    
        console.log(`First Parameter ${v1}`);   
      }  
      hello(); 

     console.log(`Addition of array :- ${Number(obj) + Number(v1)}`);
     return Number(obj) + Number(v1);
}


console.log('------------------Function anonymous ----------------------------');
/*var hello = function(v1) {  
    console.log('Hello World');    
    console.log(`First Parameter ${v1}`);   
  }  
  hello(); */
let runlog=function(value){
console.log(`Got value =${value}`);
}
  
  var print=function(){
    console.log(`------------------Function hoisting ----------------------------`);
    // we can assign a function to an object & call it like print() (function call)


    console.log(`------------------Function constructor ----------------------------`);

    var addition = new Function('v1','v2','return v1*v2');

   // console.log(`testing function constructor ${addition(checkvalue,globalvalue)}`);
   runlog(`testing function constructor ${addition(checkvalue,globalvalue)}`);

    setTimeout(function()   
    {     
   runlog(`TimeOut`);
    }, 2000);  


  }
  print();

  (()=>console.log("I am checking github"))();