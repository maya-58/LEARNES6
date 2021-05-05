/*
A class definition can only include constructors and functions. These components are together called as the data members of a class.

Instead of data properties, the body of the class only contains methods.
*/

//Class Declaration
class disrict  {
    constructor(name,rank,state='Odisha'){
        this.name= name;
        this.rank=rank;
        this.state=state;       

    }

    print(){
        console.log(`print name = ${this.name}`);
       // console.log(`print rank = ${this.rank}`);
       // console.log(`print state = ${this.state}`);
      
    }
}


var khordha = new disrict('khordha','1');
khordha.print();

var Ganjam = new disrict('Ganjam',2);
Ganjam.print();

var Pune = new disrict('Pune',3,'Maharashtra');
Pune.print();



//Class Expression
var state = class {
    //let x=10; //Error bcoz :=- Instead of data properties, the body of the class only contains methods.
    constructor(statename,srank){
        this.statename= statename;
        this.srank=srank;
    }
    getstatename(){
        return this.statename;
    }

    getsrank(){
        return this.srank;
    }
    
}
/**
 * Class 'country' inherit class 'state' 
 * When country class constructor called with rest parameters , where district class object passed as a an array named as 'payload'
 * payload loaded into coutry class object payload 
 * */

class country extends state {
    constructor(value,...payload){
        super('ODISHA','11');
        this._country=value;
        this._payload=payload;
    }
  
        set country (value) {
        this._country = value;
        }
     
        get country () {
        return this._country;
        }

    execute(){
        //super class property accessed 
        console.log(`print State name = ${this.statename}`);
   

        //own class properties accessed
        console.log(`print home country = ${this._country}`);

        var payload=this._payload;
        
        //Iterating through payload which is an array(rest parameters)
        for(let repos of payload){         
           
            //Iterating through the district class object
            for(var props in repos){
                    console.log(" District Name: "+repos[props].name+" State Name: "+repos[props].state);
            }

        }
        //console.log(`'payload cann't be load like this payload' ${this._payload}`);
    }
}
var Odishademo= new country("India",[khordha,Ganjam,Pune]);

Odishademo.execute();
console.log('----------------------------------------');
console.log('testing Class Prototype methods = '+Odishademo.country);

console.log('inheritance working '+Odishademo.getstatename());

