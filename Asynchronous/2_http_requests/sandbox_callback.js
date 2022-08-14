const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
  
    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      //4 === DONE
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request.responseText);
        //callback(undefined, request.responseText);
  
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        //console.log("could not fetch the data");
        callback("could not fetch the data", undefined);
      }
    });
  
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    //request.open("GET", "./todos/todos.json");
    request.open("GET", resource);
    request.send();
  };
  
  console.log(1);
  console.log(2);
  
  getTodos("./todos/todos.json", (err, data) => {
    console.log("callback fired");
    //console.log(err, data);
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  
  console.log(3);
  console.log(4);
  