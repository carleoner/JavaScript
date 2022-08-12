//
//
// in console for example:
// document.URL

//DOM - document object model

//elements -> copy selector = body > h1

// const parag = document.querySelector('p.error');

// console.log(parag);

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");
// paras.forEach((para) => {
//   console.log(para);
// });

console.log(paras[0]);

//
//
//
//
//
//get element by ID
const title = document.getElementById("page-title");
console.log(title);

//get elements by their class name
const errror_get = document.getElementsByClassName("error");
console.log(errror_get);
console.log(errror_get[0]);

//get elements by their tag name
const parass = document.getElementsByTagName("p");
console.log(parass);
console.log(parass[1]);
//
//
//
//
//
//
//
//change text in html

const para = document.querySelector("p");

//console.log(para.innerText);

para.innerText = "yooo lets go";

const papp = document.querySelectorAll("p");

papp.forEach((para) => {
  console.log(para.innerText);
  para.innerText = "new txt";
});

//change content div
const content = document.querySelector(".content");
//content.innerHTML += "<h2>this is a new h2</h2>";

//
//
//
//
//
//
//
const people = ["mario", "luigi", "toad", "ryu"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://wp.pl");
link.innerText = "wp.pl";

const msg = document.querySelector("p.error");
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");

msg.setAttribute("style", "color: blue;");

//
//
//
//
// change style but leave what is in html

const titles = document.querySelector("h1");
//titles.setAttribute("style", "margin:50px;");

console.log(titles.style);
console.log(titles.style.color);

titles.style.margin = "50px";
titles.style.color = "blue";
titles.style.fontSize = "60px";
titles.style.margin = "";


//
//
//
//
//
//
// add and remove classes