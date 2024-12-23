function myFunction() {
    const message = document.getElementById("demo");
    message.innerHTML = "";
    let x = document.getElementById("input").value;
    try { 
      if(x.trim() == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }
  
  class Car {
      // class always has a constructor
  
      constructor(name,year){
      this.name=name;
      this.year=year;}
  
      age(){
  
          const date =new Date();
          return date.getFullYear()-this.year
      }
  }
  // initialize new car
      const myCar= new Car("Ford",2010);
  
      document.getElementById("demo1").innerHTML =
  "My car is " + myCar.age() + " years old.";
  
  

//   JSON javascript object noatation
// for the purpose of data transformation
// is language independent



let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

document.getElementById("demo2").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

// DOM  Document Object Model
// DOM method  are actions you can perform on HTML Elements
// DOM properties  values of HTML elements u gonna play with

document.getElementById("demo3").innerHTML="sample in learning DOM";



// Event listener

document.getElementById("myBtn").addEventListener("click",function(){
    alert("eventListener")


});
