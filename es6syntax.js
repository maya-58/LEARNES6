//int x = 1;  1 integer literal
//string str = "hello";   string literal

console.log("Welcome to Exploring es6");

console.log(`-------------------String LITERALS---------------------------`);
//Spread- Operator
//spread operator allows us to insert another array within an initialized array.

let colors = ['Red', 'Yellow','white'];  
let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
console.log(colors);
console.log(newColors);
//End
console.log('------------------ARRAY----SPREAD OPERATOR------------------------');
//Copying without spread operator causes changes to original array
//let color1 = ['Red', 'Yellow','white'];  
let color1=colors;
let color2=[...colors];
color1.push('black');
color2.push('maron');
console.log('new array:-'+color1);
console.log('original array:-'+colors);
console.log('new array:-'+color2);
console.log('original array:-'+colors);
//End
console.log('----------------------------------------------');

//Spread operator and Strings
//It spreads out each specific character of the 'ANI' string into individual characters
let str = ['M',...'ANI','M','A'];
console.log(str);   
//END

console.log('---------------------REST PARAMETER-------------------------');

//Rest Parameter
//By using the rest parameter, a function can be called with any number of arguments.
//The rest parameter has to be the last argument because it is used to collect all of the remaining elements into an array.
function showresult(...args){
    let sum =0;
    for(let i of args){
        console.log(i);
        sum +=i;
    }
    console.log('sum is ='+sum);
}

showresult(10,20,45);
//End
console.log('---------------------REST DESTRUCTURING-------------------------');
//Rest parameter - Destructring 
var mycolors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];    
var [x,y,...args]=mycolors;
console.log(x);
console.log(y);
console.log(args);
//End
console.log('-----------------Variables let & const -----------------------------');
//ES6 Variables
/*
Es5 - var ...but ES6 let & Const
let have block scope , means you can not use same identifier(varriable name) in block scope
*/
let x1 =4;
//let x1 =5; It will give error
console.log(x1);
const y1=100;
//y1=200; it will throw Assignment to constant variable.

//Gloabl Scope & Local Scope


console.log('-----------------Variable Hoisting-----------------------------');
//Variable Hoisting
//Hoisting is the default behavior of JavaScript to move all declarations to the top of the current script, current function, or current scope. It allows you to use the variable before its declaration.
m=10;
console.log(m);
var m;



console.log('-----------------Ternary Operator-----------------------------');
//Operator & Operand
//'ternary operator'
var num1=45;
var num2=125;
var res=num1>num2 ? "45 greater than 25" : "No it's not";
console.log(res);
console.log('-------------------TYPEOF---------------------------');
//Type Operators
var a1=14;
var a2=true;
var a3="Govinda";
var a4=20.5; //Float is also counted as number
console.log("a1 is "+typeof(a1));
console.log("a2 is "+typeof(a2));
console.log("a3 is "+typeof(a3));
console.log("a4 is "+typeof(a4));


