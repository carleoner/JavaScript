//function declaration
function greet() {
  console.log("hello");
}

//function expression
const speak = function (name = "luigi", time = "night") {
  console.log(`good ${time}, ${name}`);
};

const calc = function (radius) {
  return radius * 4;
};

greet();
speak("mario", "morning");
speak();

console.log(calc(2));

//
//
//
//arrow function
const calcArea = (radius) => {
  return 3.14 * radius ** 2;
};

//even shorter version
const calcAreaShort = (radius) => 3.14 * radius ** 2;

console.log(calcArea(5));

//
//
//
//
//
//
// string function

const name = "shaun";

//function
const sayHi = () => "hello";
console.log(sayHi());

//function with method
console.log(sayHi().toUpperCase());

//
//
//
//
//
//
// callbacks

const myFun = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

//call function and pass function as a paramater
myFun(function (value) {
  console.log(value);
});

//
//
//
//
//
//
people = ["mario", "luigi", "toad"];

const logPerson = (person, index) => {
  console.log(`${index} yoo ${person}`);
};

people.forEach(function (person) {
  console.log(person);
});

//into arrow function
people.forEach((person, index) => {
  console.log(person, index);
});

people.forEach(logPerson);
