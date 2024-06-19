// user-defined functions

// 1. Normal Function

// function foo(){          // Function definition
//     console.log("hi");
// }

// foo()                    // Function call

// 2. Ananymous Function (Unnamed function)

// const afun = function(){
//     console.log("hello");
// }

// afun()

// 3. Arrow function

// let arr = () => console.log("Hi, Its arrow");

// arr()

// 4. IIFE Function (Immediatly Invoked Function Expression)

// (()=> {
//     console.log("Its IIFE");
// })()

// DRY -> Don't repeat yourself ( code )

// function MUL(a, b){
//     return a * b;
// }

// console.log("Mul1: ", MUL(10, 5));
// console.log("Mul2: ", MUL(2, 5));
// console.log("Mul3: ", MUL(2, 50));

// function ADD(x, y){
//     return x + y;
// }

// let ans = ADD(5, 5)

// console.log("Addition: ", ans);

// Banking App

// let balace = 1000;

// const Bank = (amt) => {

//     balace += amt;

//     console.log(balace);
// }

// const Widthdraw = (amt) => {

//     balace -= amt;

//     console.log(balace);
// }

// Destructuring (Unpacking)

// Array - destructuring

let fruits = ["banana", "grapes", "kiwi", "apple", "orange"];

// console.log(fruits.sort());
// console.log(fruits[2]);

const [b, g, k, a, o] = fruits;

// console.log(g);

// Object - destructuring

let obj = {
  name: "Ram",
  age: 23,
  mobile: 9876543211,
  email: "ram@gmail.com",
  address: {
    dno: "No.2",
    street: "xyz",
    landmark: "watertank",
    pincode: 654321,
  },
  hobbies: ["Reading", "sportz", "drawing"],
};

// const {name, age, mobile} = obj;

// console.log(obj.hobbies[2]);

// Conditional statement:

// 1. if stmt

// let age = 20;

// if(age > 18){
//     console.log("Your eligible for voting");
// }

// 2. if...else

// let age = 20;

// if(age > 18){
//     console.log("Your eligible for voting");
// }else{
//     console.log("not Eligible");
// }

// 3. if...else...if (Ladder if)

// let age = "hello";

// if(age > 18){
//     console.log("Your eligible for voting");
// }else if(age < 18) {
//     console.log("not Eligible");
// }else{
//     console.log("Something went wrong");
// }

// 4. Switch case

// let day = "Monday";

// switch(day){
//     case "Monday":
//         console.log("Hi, It' Monday");
//         break;
//     case "Tuesday":
//         console.log("Hi, It' Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Hi, It' Wednesday");
//         break;
//     case "Thursday":
//         console.log("Hi, It' Thursday");
//         break;
//     case "Friday":
//         console.log("Hi, It' Friday");
//         break;
//     case "Saturday":
//         console.log("Hi, It' Saturday");
//         break;
//     default:
//         console.log("Happy weekend");
//         break;
// }

// Looping Statements:

// 1. for loop

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// 2. while loop

// let i = 10;

// while (i < 10) {
//   console.log("while: ", i);
//   i++;
// }

// 3. do...while loop

// i = 10;

// do {
//   console.log("do...while:", i);
//   i++;
// } while (i < 10);

// 4. for...in
// 5. for...of

// Jumping statements: (break/continue)

for (let i = 0; i <= 10; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
