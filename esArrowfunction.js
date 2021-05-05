//let esfunction = require('./esfunction');

//let runlog=esfunction.runlog;
let runlog=function(value){
    console.log(`Got value =${value}`);
    }

runlog('*******************Arrow function aka Lambda***********************');


let printwithtime =new Date();
let ranlog = value => {
console.log(`got value = ${value} Time Now :  + ${printwithtime}`);
//Error('error');
}

let Error = err => console.error(err);





ranlog(`-----------------Lambda-------------------------`);

var num = ['1','5','7'];
var numcheck = num => {
    return 758;
/*
    this.num.forEach(   num => {   
    if (num < 30)   
        this.child.push(num);   
    })
    */
}

ranlog(numcheck());

ranlog(`------------------Generators------------------`);
ranlog(`
1) When the generator gets called, it doesn't run its code. Instead, it returns a special object which is called as 'Generator Object' for managing the execution.
2) The generator function can return (or yield) the control back to the caller at any point.
3) Unlike the regular function, the generator can return (or yield) the multiple values, one after another, on the requirement.`);


//Generator functions cannot be represented by using Arrow Functions
function* location() {
    yield 100;
    yield 'first line';
    yield 'second line';
    yield 'third line';
    yield 'forth line';
    return 'fifth line';

}

var GPS = location();
var OBJ= () => GPS.Next();
//console.log(OBJ);
ranlog(OBJ);//value=GPS.Next());


//IIFE Immediately Invoked Function Expression
(function(){
    ranlog(`----------------IIFE----------------`);

})();

// Regular Function.   
var strdn= () => //function hello()   
{   
    console.log("Regular function");   
};   
// Regular Function execution.   
strdn();   
    
// IIFE creation and execution.   
(function() { ranlog("testing....1....."); })(); //works
(function val() { ranlog("testing......2..."); })();//also works

(function() {  ranlog('testing.3...');   })();

(() => ranlog(`lambda also works`))();//works

//var Error = err => console.error(err);
  
    console.log(GPS.next());

    console.log(GPS.next());

    console.log(GPS.next());

    console.log(GPS.next());

    console.log(GPS.next());
    console.log(GPS.next());
   // console.log(GPS.next());