//THESE ARE VARIABLES
var x = 8;
var c = a + b;
var firstName = "Danielle";
var numberofYearsOnEarth = "24";
var isSchoolFun = "false";
var highSchool = "Immaculate Conception";

//DEBUGGING
alert("I'm here!");
alert("Hello World!");
alert("Stop!");
alert("You are not old enough to access this page!");
//CALL VARIABLES
console.log( name );
console.log( numberofYearsOnEarth );
console.log( isSchoolFun );
console.log(highSchool);

//DIFFERENT DATA TYPES
var fullName = "Danielle Brantley"; //THIS IS A STRING
var language = "JavaScript";        //THIS IS A STRING
var y = 18; // THIS IS A NUMBER 
var money  = 2.29; // THIS IS A NUMBER 
var pi = 3.14156; // THIS IS A NUMBER 
var loveIceCream = true; // THIS IS A BOOLEAN 
var loveVegetables = false; //THIS IS A BOOLEAN 
var family = ["Denise", "Daren", "Benjamin", "DJ", "Nikita"]; //THIS IS AN ARRAY
var random = [9, 18, 27, 36, 45, 54, 63, 72 "BINGO"]; //THIS IS AN ARRAY

//TESTING
9 === "9";
school === School;
11 < 21;
88 > 78;
25 >= 25;
33 <= 33;


//LOGIC
if (x > 18) {
	console.log ("You are allowed to enter site!");
}
else {
  	console.log("You are NOT allowed to enter site!");
  }

if (x >= 18) {
	console.log("You are allowed to enter site!");
}
else if (x <=18 && x >= 13){
	console.log("Consult your parents before entering site!");
}
else{
	console.log("You are NOT allowed to enter site!")
}

//FUNCTIONS
function Age(){
	w = w + 1;
	console.log("I am " + w +" years old.");
}

function calculateArea() {
  var area = width * height;
  return area;
}

function greetUser() {
	alert ( "Hi, there.");
}


//FUNCTION EXERCISES

var square = function(x) {
	return x * x;
};
console.log(square(12));
 

 function greetCustomer() {
 	console.log("Hi, can I take your order?");

 };
 greetCustomer();

function addition = (numberOne, numberTwo) {
	return numberOne + 5 + NumberTwo;
}
console.log(addition(8, 14));