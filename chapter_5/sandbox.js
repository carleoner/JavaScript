//object literals

//array of objects
// const blogs = [
//   { title: "come si fa la pizza", likes: 30 },
//   { title: "10 cose per vivere meglio", likes: 50 },
// ];

let user = {
  name: "crystal",
  age: 30,
  email: "jabadabadu@wp.pl",
  location: "Bologna",
  blogs: [
    { title: "come si fa la pizza", likes: 30 },
    { title: "10 cose per vivere meglio", likes: 50 },
  ],

  login: function () {
    console.log("logged in");
  },
  //short version
  logout() {
    console.log("logged out");
  },
  logBlogs: function () {
    console.log("This user has written: ");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log(user);
console.log(user.name);

user.age = 35;

console.log(user["email"]);

user["location"] = "berlin";
console.log(user["location"]);

console.log(typeof user); //object

user.login();
console.log(user.name.toUpperCase());

user.logBlogs();

//
//
//
//
//
//
//
// Math object

console.log(Math.abs(-2));
console.log(Math.PI);
console.log(Math.floor(7.8));
console.log(Math.trunc(7.8)); //pop decimal (after dot)

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

//
//
//
//
//
//
//
// reference values
const userOne = { score: 25 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.score = 30;
console.log(userOne, userTwo);
