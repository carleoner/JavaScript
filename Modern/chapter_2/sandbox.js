// alert('hello, world');

// print do consoli
// console.log(1);

let age = 25;
let year = 2015;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 205;
console.log(points);

// stary sposob definicji - var
// var score = 75;
// console.log(score);

//strings

let first = "Adam";
let last = "Sanders";

let fullname = first + " " + last;
console.log(fullname);

console.log(fullname[0]);

//length
console.log(fullname.length);

//methods
console.log(fullname.toUpperCase());
lowerCase = fullname.toLowerCase();
console.log(lowerCase);

//
//
//
//
// methods on string

email = "mario@wp.pl";
let index = email.indexOf("@");
console.log(index);

// let result = email.lastIndexOf("p");

//od index do index
//let result = email.slice(0, 5);

//od 4 do 14 (10 to ilość znakow)
//let result = email.substr(4, 10);

let result = email.replace("m", "w");

console.log(result);

//
//
//
//
// methods on numbers

// let radius = 10;
// const pi = 3.14;

// result = radius%3;
// result = pi*radius**2

//order of operations - B I D M A S
// result = 5*(10-3)**2;
// console.log(result);

// let likes = 10
// likes/=2;
// console.log(likes);

//
//
//
//
//
// template strings
const title = "best reads of 2019";
const author = "adams sanders";
const likes = 30;

// result = "the blog" + title + "by" + author "=" + likes;

result = `The blog called ${title} by ...`;

console.log(result);

let html = `
    <h2>${title}</h2>
    <span>This blog has ${likes}</span>
`;

console.log(html);

//
//
//
//
//
//
//array

let ninjas = ["shaun", "fun-li", "chun-li"];
//console.log(ninjas[1]);

//result = ninjas.join(",");
//result = ninjas.indexOf("fun-li");
// add couple
//result = ninjas.concat(["ken", "crystal"]);
//pushes one and prints length
result = ninjas.push("ken");
result = ninjas.pop();

console.log(result);

age = null;
console.log(age + 3);

//boolean
result = email.includes("@");
console.log(result);

age = 25;
//is age the same value and type ===
console.log(age === 25);

score = "100";
console.log(Number(score) + 1);

console.log(typeof score);

result = Number("hello");
