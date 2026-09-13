// //agr hm object ko litrals ke trhan declair krte hain to woah "singleton" nahi banda 

// //object litrals
// const Jsuser = {
//     name:"Hitesh" ,
//     age :18,
//     location : "jaipur" ,
//     email: "hitesh@google.com",
//     isLoggedin : false,
//     lastLogedin : ["Monday" , "Saturday"]
// }
// //isko hm jaise mrze value desakte hain array ke form main ,string ke form main jaise mrzi
// //Ab hm check karain ge ke ise hm Access kaise krsakte hain 
// console.log(Jsuser.email) //aik to hemare pas yeah tarika hai access krne ka 
// console.log(Jsuser["email"]) // yeah second method haiiske lia hhemain isko string deni prte hai lekin dot wale main string deni ke zarorat nahi prte
// console.log(Jsuser);//for full acess

// //for change detail 
// Jsuser.email="hitesh@gpt.com "  //istrhan hm valuse change krsakte hain
// //ahr hm chahte hai ke object ke value lock  hojae koi bhi uske value change na kr sake to hm kya krskate hain ke freeze use krsakte hain 
// // Object.freeze(Jsuser)//ab isobject ke valuse change nahi hosakte
// Jsuser.email = "Abdullah@gmail.com "  //so change nahi hoge

// // hm object main function add krna dekhain ge 
// Jsuser.greeting = function(){
//     console.log("Hello Js user");
// }
// Jsuser.greetingTwo = function(){ //isse aesa hoa agr function main kisi or object ke value leni hn to this ke sath dot ka use krta hai
//     console.log(`hello js user ${this.name}`);
// }

// console.log(Jsuser.greeting()); 
// console.log(Jsuser.greetingTwo())  //bracket zarori hote hai function ke lia 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//part 2
// uper hmne objectliterals dekha tha  ab hm object singleton dekhain ge 