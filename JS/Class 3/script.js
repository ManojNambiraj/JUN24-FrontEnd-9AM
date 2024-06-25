let fruits = [2, 5, 10, 20, 50, 71, 99, 101];

// console.log(fruits.length);

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// MRF -> Map, Filter, Reduce

// Map

// const result = fruits.map((item) => {
//     return item * 2
// })

// console.log(result);

// Filter

// const result = fruits.filter((item) => (item % 2 != 0))

// console.log(result);

// Reduce

// const result = fruits.reduce((prev, curr) => (curr + prev))

// console.log(result);

// ForEach

// fruits.forEach((item) => {
//     console.log(item);
// })

//for....in

// for(let i in fruits){
//     console.log(i);
// }

// for....of

// for(let i of fruits){
//     console.log(i);
// }

// Class

// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar = new Car("Benz", 2022);
// const praveenCar = new Car("Volvo", 2018)
// const anuCar = new Car("Honda", 2015)

// console.log(myCar);
// console.log(praveenCar);
// console.log(anuCar);

// Call, Bind, Apply

// Call

// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastname
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastname: "weeker"
// }

// const person2 = {
//     firstName: "Raj",
//     lastname: "kumar"
// }

// let ans = person.fullName.call(person2)

// console.log(ans);

// Apply:

// const person = {
//     fullName: function (country, State) {
//         return this.firstName + " " + this.lastname + "," + country + "," + State
//     }
// }

// const person2 = {
//     firstName: "Raj",
//     lastname: "kumar"
// }

// let ans = person.fullName.apply(person2, ["India", "TN"])

// console.log(ans);

// Bind:

// const person = {
//     firstName: "Raj",
//     lastname: "kumar",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastname);
//     }
// }

// let ans = person.fullName.bind(person)

// setTimeout(ans, 2000);

// setTimeout(() => {
//   console.log("hi");
// }, 5000);


// setInterval(()=>{
//     console.log("hello");
// }, 2000)