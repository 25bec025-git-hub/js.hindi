// console.log("Ashish Yadav")
// const AccountId = 12345
// let AccountEmail = "12345@gmail.com"
// var password = "12345"
// Accountcity = "patna" //but not good
//AccountId = 2 // not allowed 
// let Accountstate;
// console.table([AccountId , AccountEmail , Accountcity , password , Accountstate ])
/*
 use of var is not preferred 
 because of issue in block scope and functional scope 
*/
//#5
/*"use strict"; // it is used to avoid the use of undeclared variable
// Accountcity = "patna" // it will give error because of strict mode
// treat all js as newer version
//alert(3+3) // we are using node js , not browser so alert will not work
let name = "Ashish Yadav"
let age = 20
let isLoggedIn = false
// number => 2 to the power of 53
// bigint 
// string => "" or '' or ``
// boolean => true or false
// null => standalone value that represents nothing
// undefined => it is a value that is assigned to a variable that is not initialized
// symbol => it is a unique and immutable data type that is used to create unique identifiers for objects
// object => it is a collection of key-value pairs
// array => it is a collection of values that are ordered and changeable
// function => it is a block of code that performs a specific task
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isLoggedIn)
// console.log(typeof null) // it will give object because of a bug in js
// console.log(typeof undefined)
// console.log(typeof Symbol("id"))
// console.log(typeof {name: "Ashish", age: 20})
// console.log(typeof [1, 2, 3])
// console.log(typeof function() {})
*/

//#6 Data Type conversion
/*
let score = "100abc"
console.log(typeof score) // string
console.log(typeof(score))
let valueInNumber = Number(score) // it will give NaN because of the presence of non-numeric characters
console.log(valueInNumber) // NaN
console.log(typeof valueInNumber) // number
*/
// "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "0" => 0
// "" => 0 => false
// " " => 0
// "true" => NaN
// "false" => NaN
// true => 1; false => 0
/*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // it will give true because 1 is a truthy value
console.log(booleanIsLoggedIn) // true
console.log(typeof booleanIsLoggedIn) // boolean
*/
/*
let someNumber = 33
let stringNumber = String(someNumber) // it will give "33"
console.log(stringNumber) // "33"
console.log(typeof stringNumber) // string
*/