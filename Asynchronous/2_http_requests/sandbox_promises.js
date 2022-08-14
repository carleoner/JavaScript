const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      //4 === DONE
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request.responseText);
        //callback(undefined, request.responseText);

        const data = JSON.parse(request.responseText);
        //callback(undefined, data);
        resolve(data);
      } else if (request.readyState === 4) {
        //console.log("could not fetch the data");
        //callback("could not fetch the data", undefined);
        reject("could not fetch the data");
      }
    });

    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    //request.open("GET", "./todos/todos.json");
    request.open("GET", resource);
    request.send();
  });
};

console.log(1);
console.log(2);

// getTodos("./todos/todos.json", (err, data) => {
//   console.log("callback fired");
//   //console.log(err, data);
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//
//
//
//
//
//
//
//
//promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch
//     //resolve("some data");
//     reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//
//
//
//
//
//
//
//
getTodos("./todos/todos.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("./todos/todos.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("./todos/todos.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

console.log(3);
console.log(4);
