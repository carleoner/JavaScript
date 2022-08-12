// const content = document.querySelector("p");

// console.log(content.classList);

// content.classList.add("error");
// content.classList.remove("error");

const content = document.querySelectorAll("div p");

content.forEach((para) => {
  if (para.innerText.includes("error")) {
    para.classList.add("error");
  }
  if (para.innerText.includes("success")) {
    para.classList.add("success");
  }
});

const title = document.querySelector(".title");
//if there is - removed, if there isnt - added
title.classList.toggle("test");
