//Dates

let mydate=new Date();
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleTimeString())


//Moth is started from 0 in JS
// let mycreatedDate=new Date(2023,2,6);

let mycreatedDate=new Date(2023,2,6,5,6);
// console.log(mycreatedDate.toLocaleDateString())

let formathdate=new Date("01-01-2001")
// console.log(formathdate.toDateString())

//Timestamps
let mytimestamp = Date.now()
// console.log(mytimestamp)//this is the millisecond from 1st jan 1970 where js considers date.


//To convert milliseconds to seconds we need to divide by 1000
// console.log(mycreatedDate.getTime());
// console.log(Math.round(Date.now()/1000))


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth()+1); //because starts from 0

// console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

let date=newDate.toLocaleString('default',{
  weekday:'long',
  month:"long",
  year:"numeric"
})
console.log(date)