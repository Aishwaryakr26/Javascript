const score=400;
// console.log(score)

const balance=new Number(100);
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

const number=23.9086;
// console.log(number.toPrecision(3))  //concentrates on three numbers
//returns string or exponential

let num=1000000000;
// console.log(num.toLocaleString())// Adds commamas so that it willl be easy to read


// ++++++++++ Maths +++++++++

const prompt=require('prompt-sync')();
// //ways to write numbers
// let num=10000000;
// //u can add underscores they act as seperators as in commas 
// let billion=1_000_000_000;
// console.log(billion)
// //e can be replaced by number of 0's i.e, 1000=1e4
// console.log(1e9)
// console.log(Math.floor((Math.random(100)*100)));
// let numb=1e3;
// console.log(1e3===1*1000)
// //you can also ass negative sign with e
// console.log(1.2e3===1.2*1000)
// console.log(1200==1.2e3)
// let mcs = 1e-6; // five zeroes to the left from 1

// let s=1e-3
// console.log(s)
// console.log(0.001==s)

//Hexadecimal numbers are written as 0x and then the numbers alphabets a-f are allowed(a=1,f=15)
console.log( 0xaa )
// Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
console.log(a,b)



//toString(base)--represents the string representation of a number
// The method num.toString(base) returns a string representation of num in the numeral system with the given base.

// The base can vary from 2 to 36. By default it’s 10.

// Common use cases for this are:

// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z
// console.log(b.toString(10));
// let n=1234.;//there is no digit after decimal 
// console.log(1234..toString(2))//hence double dots can be used


// Rounding

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
// Math.trunc
//removes the digit after decimal point 3.123 becomes 3

 
// what if we want to round of to nth digit after the decimal

// toFixed(n)-- rounds the number to n digits after the point and returns a string representation of the result.
// This rounds up or down to the nearest value, similar to Math.round:
let r=12.3455;
// console.log(r.toFixed(2))


// parseInt and parseFloat
// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:
// But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.

// That’s what parseInt and parseFloat are for.

// They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:
// console.log(parseInt('100px'))
// console.log(parseFloat('12pt'))



// Math.random() -returns a random number from 0-1  not including 1

// console.log(Math.random())
// console.log(Math.max(2,3,5,7,5,43,-98765))
// console.log(Math.min(2,3,5,7,5,43,-98765))
// console.log( Math.pow(2, 10) ); 

//tasks
// let a1=+prompt("enter a number ")
// let a2=+prompt("enter a number ")
// console.log(a1+a2)

// function readNumber(){
//  let num;
//   do{
//   num=prompt("enter a number")
//  }while(!isFinite(num))

// if(num==null || num=='') return null;
// return +num;
// }
// console.log(readNumber());


// function random(min,max){
//   return min+ Math.random(max)*(max-min)
// }
// console.log(random(1,5))

function randomInt(min,max){
  return min+(Math .round(Math.random(max)))
}
// console.log(randomInt(1,5))


// console.log(Math.random())
console.log(Math.random()*10)+1

// console.log(Math.floor(Math.random()*10+1))

let max=20;
let min=10;
console.log(Math.floor(Math.random() * (max-min)+1)+min)