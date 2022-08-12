console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
  console.log("callback func fired");
}, 20000);

console.log(4);
console.log(5);
