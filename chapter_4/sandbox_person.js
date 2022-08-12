const ul = document.querySelector(".people");

people = ["mario", "luigi", "toad", "ryu"];

let html = ``;

people.forEach((person) => {
  //create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
