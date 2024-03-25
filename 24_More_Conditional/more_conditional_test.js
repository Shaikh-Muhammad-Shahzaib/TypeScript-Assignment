"use strict";
//  Equality and Inequality test 1
console.log("Equality test with string :", "Apple" === "Apple");
//  Equality and Inequality test 2
console.log("Inequality test with string :", "Apple" != "orange");
// Test using the lower case function 
console.log("Lower case function test :", "Hello".toLowerCase() === "hello");
// Numerical test equality 
console.log("Equality test with number :", 26 === 26);
// Numerical test inequality
console.log("Inequality test with number :", 26 != 20);
// greater then and less then test 1
console.log("Greater then test:", 20 > 19);
// greater then and less then test 2
console.log("Less then test:", 20 < 29);
// greater then or equal to
console.log("Greater then or equal to test: ", 18 >= 18);
// less then or equal to
console.log("Less then or equal to test: ", 20 <= 26);
// test using "and" operator
console.log("And operator test: ", 28 === 28 && 7 > 4);
// test using "or" operator
console.log("Or operator test: ", 28 === 28 || 7 > 4);
// test weather an item is in a array
const fruits = ['Nashpati', 'Banana', 'Apple'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));
// test weather an item is not in a array
console.log('Testing "Mango" in not in array:', !fruits.includes("Mango"));
