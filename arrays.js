// //array ismain hm array prain ge ko ke non permitive dtatatype hai jo ke uske adress se eactual value change krte hai 

// //1 . javascript main array thora sa change hota hai bakion ke nisbat ismian zarori nahi hota ke hm samedatatype ke value hi store krwain ismain hmkisi bhi data type ke alue store krsakte hain o
// // 2 . or dosra yeah ke iska size fix nahi hota hm increase bhi krsakte hain value bad main add bhi krsakte hain 
 
// const myArr= [0,1,2,3,"Abdullah"];
// const myheros = ["shaktima " , "naagraj"]

//  const myArr2 = new Array(1,2,3,4); //aesa hm type ke sath declair krte hain 

//  console.log(myArr); // 1

//  // Array Methods

//  myArr.push(6); // likethis we add more elements
//  myArr.push(7);

// console.log(myArr); 

// myArr.pop()  // istrhan se jo last element hota hai woah remove hota hai 

// myArr.unshift(9);//isse 9 first pr add hojae ga 
// console.log(myArr); 

// myArr.shift() // isse first elemt remove hojae ga 
// console.log(myArr); 

// console.log(myArr.includes("Abdullah"));//isse peta lagta haike kya hemara element main yeah include hai yn nahi 

// console.log(myArr.indexOf(3));//isse peta lagta haike hemare pas third value main kya majood hai

// const newArr = myArr.join()//basically join ka kam yeah haike yeah sare array ko string main convert krdeta hai or iske type bhi string ho jate hai

// console.log(typeof(newArr));


// //ab hemare pas hotahai slice or splice 

// const myn1 = myArr.slice(1,3)//ismain hta yeah hai ke 1 se shuru hoag or 3 tk 3rd ismain include nahi hoga 
// //sline main yeah hota haikesift show krta hai us value ko 
// console.log(myn1);
// console.log(myArr);// 
// const myn2 = myArr.splice(1,2);
// console.log(myn2);
// console.log(myArr);
//lekin splice jo hai woah origional array se cut krdeta hai woah value 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==============================================

//hm ab aik new topic shuru krne lage hain array ka
const marvel_heros = ["thor" , "Ironman" , "spiderman" ]
const dc_marvel = ["superman" , "wonderman" , "sunzu"]
//ab agr hm ise merge krte hain to kya hoga 
// marvel_heros.push(dc_marvel)// ismain  ho yeah reha hai ke second array first ka aik variable ban reha hai jo ke heamin nahi chahea hm chahte hain ke second uske sath add hojain but aesa hi nahi reha
//   [
//   'thor', 'Ironman','spiderman', [ 'superman', 'wonderman', 'sunzu' ]
// ]       aesa a reha hai but hemain aesa nahi chahea 

// to hm aesa krain ge ke concat legain ge 
// let new_hero = marvel_heros.concat(dc_marvel)
// console.log(new_hero); //  to istrhan aik new variable main store krwain ge tb sai hojae ga 

//isi ka aik or method or best method yeah haike
// const all_new_heros = [...marvel_heros , ...dc_marvel]//ismain hm or bhi add krsakte hian 
// console.log(all_new_heros);


// aik or chez but yeah rear hai  agr hemare pas aesa hoaik array ke andr aik array uske andr aik array 
// const another_Array = [1,2,3,[4,5,6] ,7 , [6.7,[[4,5]]]]
// //ab hm flat function istemal karainge
// const real_another_Array = another_Array.flat(Infinity);//isiske bracket main dete hain kitne level tk flat krna hai jaise heamre case main 4 level tk hai to hm four level tk akrain geyn infinity bh use krsakte hain but better 4 hi hai
// console.log(real_another_Array);

// agr hm kisi stringkoa rray benana chahte hain to hm aesa benain ge 
// console.log(Array.from("Hitesh"));


//yn hm aesa bhi krskate hain 
// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3));
//yeah bhi hemain aika rray bean dega