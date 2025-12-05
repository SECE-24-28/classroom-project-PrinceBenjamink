// let a = 10;
// console.log("The value of a is:", a);
// console.log("The value of a is:", a);

// const b = 20;
// b = 10;
// console.log("The value of a is:", b);

// const a = [1,2,3,4,4];
// console.log(a);

// console.log(a[0])

// console.log(typeof "10");
// console.log(typeof 10);
// console.log(typeof true);

// const a = {"name": "John", "age": 30};
// console.log(a);
// console.log(a.name);
// console.log(a.age);

// let a = "Sairam"
// console.log(a[0]);
// console.log(a);

// let a = ["dsjgfs",10,'a',true];
// console.log(a);
// console.log(typeof a);
// console.log(typeof a[0]);
// console.log(typeof a[1]);
// console.log(typeof a[2]);
// console.log(typeof a[3]);

// let b = "Hello";
// console.log(b);

// b = b.replace("l","L");
// console.log(b);

// let b = "Hello World" + " Welcome to JavaScript";
// console.log(b);

// function greet(name){
//     console.log("Hello " + name + ", Welcome to JavaScript!");
// }

// greet("Sairam");

// const add = (a,b) => {
//     console.log(a+b);
// }

// add(6,42);

// let a = {name: "Sairam",age: 21, course: "cse"};
// let b = {name: "Nagul",age: 21, course: "cse"};
// let c = {name: "Puvi",age: 21, course: "cse"};

// let d = [a,b,c];

// console.log(d);
// console.log(d[0]);

// for(let i=0;i<d.length;i++){
//     console.log("Name : ",d[i].name);
//     console.log("Age : ",d[i].age);
//     console.log("Course : ",d[i].course);
//     console.log("--------------");
// }

// d.map((item,index)=>{
//     console.log("Index : ",(index+1));
//     console.log("Name : ",item.name);
//     console.log("Age : ",item.age);
//     console.log("Course : ",item.course);
//     console.log("--------------");
// })

const person = {
  name: "Sairam",
  age: 21,
  address: "Trichy",
};

const key = Object.keys(person);
console.log(key);
const value = Object.values(person);
console.log(value);


let a = value.toString();
console.log(a);