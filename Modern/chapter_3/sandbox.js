// for (let i = 0; i < 5; i++) {
//   console.log("in loop, i:", i);
// }

// console.log("loop finished");

const names = ["shaun", "mario", "luigi"];

for (let i = 0; i < names.length; i++) {
  //console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//
// do while loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//
//
//
//
// if statements
//
// !false
// OR || AND &&
// break / continue

const age = 25;
if (age > 25) {
  console.log("over 20yo");
} else if (age == 25) {
  console.log("exact 25yo");
} else {
  console.log("less than 25yo");
}

const grade = "B";
switch (grade) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
    break;
  case "C":
    console.log("C");
    break;
  default:
    console.log("not valid grade");
    break;
}
