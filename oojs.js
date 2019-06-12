//Object Oriented Javascript and Prototypal inheritence
//Inheritence: one object gets access to the properties and methods of another object

//Classical vs Prototypal inheritence

//all objects have a prototype property which is a reference to another object proto (that is it's prototype)

// let person = {

// 	firstName:"Default",
// 	lastName: "Default",
// 	getFullName: function(){
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// let john = {

// 	firstName:"John",
// 	lastName:"Doe"
// }

// john.__proto__ = person; //don't use this method

// console.log(john.getFullName());

// let a = {};

// let b = function() {};

// let c = [];


// creating objects with Object Prototype

//  function Student(){

//  }
//  Student.prototype.name = "Johnnie Johnstone";
//  Student.prototype.age = 23;

//  let student1 = new Student();
//  console.log(student1.name);

// //constructor function with two parameters
// function Person(firstName, lastName){

// 	this.FirstName = firstName;
// 	this.LastName = lastName;
// };

// //added a getFullName method as a prototype object

// Person.prototype.getFullName = function(){

// 	return `${this.FirstName} ${this.LastName}`;
// }


//use transpilers like babel and traceur
//Use es6 modules for cleaner and much easier to work with code. prevent variables from being declared at a global level
//module:collection of small independent components that we can reuse in our application. they encapsulate behavior, make it easier to work with, maintain and scale.

//a class is something we use to stamp out objects (stands for classification)
//each instance that the class stamps out is called an object


class Drone{
	constructor(id, name){
		this.id = id;  //instance properties only get created on the instance of the class
		this.name = name;
	}
	static getCompany(){ // the key word static makes getCompany only exist on the class and not the instances
		console.log('in getCompany');
	}
	fly(){
		console.log(`Drone ${this.id} is flying`); //this method will be attached to each instance, but we can use static methods and attach them to each instance
	}

}

Drone.maxHeight = 2000; // we can also set properties directly on Drone (they can be static properties or class properties (maxHeight is a static property since it only exists on the class))

//instance variables (each instance of Drone will have its own set of properties)
let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B456", "Glider");

console.log(`Drone: ${drone.id} ${drone.name}`);

console.log(typeof Drone);
console.log(typeof drone)
console.log(drone instanceof Drone);

console.log(drone.id, drone2.id);

console.log(drone.maxHeight)//undefined because there is no maxHeight on the instance

drone.fly();
drone2.fly();

//Getters and Setters

class DroneA{

	constructor(id){

		this._id = id; //normally when you see an underscore before a variable in a class, it is private
	}

	get id(){
		return this._id; //we use the getter for returning the value of a property
	}

	set id(value){
		this._id = value; // with the setter on the class, you can set a new value onto the instance
	}
}

let drone3 = new DroneA("C789");

drone3.id = "D1000"; //this invokes our setter to log out the new value

console.log(drone3.id);


//Inheritence: Classes deriving functionality from other Classes
// we use the extends key word to extend classes from our base class to create new classes

//base class
class Vehicle{ //will have all of the properties and methods that all of our vehicles have in common (all cars and drones will have these propeties from vehicle)
       constructor(licenseNum){  // the base class will have an applied constructor, so if you put one on a derived class, it will throw errors.
       	this.licenseNum = licenseNum;
       }
   }

//multiple derived classes that inherit from Vehicle

class DroneB extends Vehicle{

}

class Car extends Vehicle{
  constructor(licenseNum){  // if we are going to have a constructor on the derived class, we have to call super function to make sure that the constructor on the base class gets called first
  	// super is used to access and call functions on an object's parent
  	super(licenseNum);

  }
}

let c = new Car("AD4930");

console.log(c instanceof Car); // when we instantiate a class, it's an instance of that class, any class that gets extended is an instance of Object
console.log(c instanceof Vehicle);
console.log(c instanceof Object);
console.log(c.licenseNum);


class VehicleA{

   constructor(){
      
      this.gpsEnabled = true;

   }

   start(){
   	console.log("Starting Car");
   }

   static getCompanyName(){
		console.log("My Company");
	}

}

class DroneC extends VehicleA{


}

class CarA extends VehicleA{

	constructor(){

		super();//if we have a constructor on a derived class, super has to be called first
		this.gpsEnabled = false;
	}

	 start(){
	 	 // in constructors, super has to be called first, but not in methods
   	console.log("Starting Car"); //if we add the method to the derived class, it overrides the method in the base class to get both methods to run, use the super keyword
   	super.start();
    }

    static getCompanyName(){

		console.log("My other Company");
		super.getCompanyName();
	}
}


let car = new CarA();

console.log(car.gpsEnabled);

car.start();

CarA.getCompanyName(); // a static method on the base class is accessible on any derived class, static method must be called on the classname itself not the instance
//car.getCompanyName() will throw an error.

//in a real application, you want to have each class in its own file

