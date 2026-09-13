<<<<<<< HEAD
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
=======
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

// //part 2
// // uper hmne object  literals dekha tha  ab hm object singleton dekhain ge 

// // const tinderUser = new Object()
// // console.log(tinderUser); // yeah hemain {} yeah result dega

// const tinderUser={}
//  // yeah bhi same {} yeahi dega fark bs yeah hai uper wala singeton hai means ke woah constructor se banta hai or yeah non singleton hai yeah literal se banta hai 
// tinderUser.id = "123abc"
// tinderUser.name = "Abdullah"
// tinderUser.isLogedin= false;
// // console.log(tinderUser);
// // to yeah value isne dedi

// // Ab hm kya krainge ke aik object ke andr dosra or dosre ke andr aik or object create krain g

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Abdullah",
//             lastname : "Cheema"

//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname)
// // to istrhan hm nested object create krsakte hain or uski access krsakte hian

// //ab hm dekhain ge ko 2 object ko kasie jorte hain 

// const obj1= {1: "a" , 2 : "b"}
// const obj2 = {3: "c" , 4 : "d"}
// // const obj3 = Object.assign( {} ,obj1 , obj2)
// // iska matlab hai ke  Object.assign( target ,source)// firstwala heamrepas target hoga ke heamin array main he result milain ge or baki jo remaining sare hain woahheamre pas source honge agr hm aesa nahi krian ge to aesa hoga ke heamre sare values hjo hain woah first objct main chle jain ge kyon ge tb obj1 target hoga remaining souurce honge
// // waise isko bhi hm kmhi use krain ge asl main jo hm use krain ge woha yeah method hoga jaise array main kia tha
// // const obj3 = {...obj1 , ...obj2} //ise spread operator keh jata hai
// // console.log(obj3)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //issew object ke sare keys miljae gi
//  console.log(Object.values(tinderUser)); // isse object main sare value miljae ge
//  //inke type hemarepas array type main hoge 
//  console.log(Object.entries(tinderUser));//isse hr valuse alag alg array main hojae gi

// //  aik or hote hai type
// console.log(tinderUser.hasOwnProperty("isLogedin"))//isse betata haikekya yeah hemare pas available haike nahi pahle se











// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//part3
//object destructureing 
// const tinderUser={
//     name:"Hitesh" ,
//     age :18,
//     location : "jaipur" ,
//     email: "hitesh@google.com",
//     isLoggedin : false,
//     lastLogedin : ["Monday" , "Saturday"]
// }
//dekho agr ismain hemain aik object ko bar bar use krna hai to hm kaise krain ge 
//  console.log(tinderUser.lastLogedin);
//t yeah heamre pas boht lamba hojae ga itna bhara bar bar likhna o tb hm object destructureing use krte hain
//  const {lastLogedin:lastin} = tinderUser;
//to isse hm direct use krsakte hain itna lamba likhne ke zarorat nahi hai
// console.log(lastin);
>>>>>>> b051e61 (objects)
