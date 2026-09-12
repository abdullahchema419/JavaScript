// // const score = 400
// // console.log(score);
// // //yeah to haike basic hm initialization krte hain number ke 


// const balance = new Number(100);
// // console.log(balance);
// // ismain yeah hota haike hm specically specify krte hain ke hmne jo number lia hai woah number type ka hi hai
// // ke hm aik number type ka le rahe hain 

// console.log(balance.toString().length);//ismain hm isko pahle string main convert krrahe hain or uske length check krrahe hain 3

// console.log(balance.toFixed(1));//ismain hemain yeah hemain 1 floating point tk result de reha hai 100.0
// // yeah string main hi hota hia 

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));  // ismain hemain 4th precison point tk valus deta hai jaise  123.9

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));//iskayeah kam haike negative number ko positive krdeta hai or positive positive he rehta hai

// console.log(Math.round(4.6));//yeah roundoff krdeta hai 

// console.log(Math.ceil(4.2))//yeah next number dedeta hai 5

// console.log(Math.floor(6.5))//yeah previous number dedeta hai

// console.log(Math.min(1,4,6,7));//yeah min number betata hai

// console.log(Math.max(3,5,6,2));//yeah max number deta hai 

// console.log(Math.random())//yeah aik random number dedeta hai 0 se 1 tk
// //agr hm 1 se 10 tk lena chahte hain to 
// console.log(Math.random()*10 + 1)// jo 1 haina woah yeah haike 0 nahi dega 

// agr hm chahte hain detail main na hoto 
// console.log(Math.floor(Math.random()*10)+1) // yeah exact number dega

//agr hm number kisi range main chahte hain ke specically isi range main hoto hm yeah use krte hin 

const min = 10
const max = 255
console.log(Math.floor(Math.random()*(max-min + 1 ) + min))

