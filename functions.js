

// // Now we study functions
// function sayMyName(){
//     console.log("Hello")
//     console.log("My")
//     console.log("Name")
//     console.log("Is")
//     console.log("Abdullah")
//     console.log("Cheema")
// }
// // sayMyName(); //This is how we run a functon

// // Now we write function toadd two numbers
// function addwoNumbers(numbers1 , numbers2){
//     //let result =numbers1+numbers2;
//     //return result;
//            return numbers1+numbers2
// }
// // console.log(addwoNumbers(3,5))

// function loginuserMessage(username){
//     if(!username){
//         // console.log("Please enter a username")
//         return
//     }
//   else{
//     return `${username} just logged in`;
// }}
// console.log(loginuserMessage("Abdullah"));
//if we print empty if will result plz enter username  other wise username


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// part 2

// ab hm bat krain ge aik new chez ke jaise agrhm aik shoping cart ke example lelete hain hemai nahi idea ke hemare pas kitne perameter hon ge to us case main hm kyakarian ge 

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(2,3,4))//ismain hmisse jitne marzi oytput lesakte hain

// aik or case ai hemare aps

function calculateCartPrice2(val1 ,val2 , ...num1){
    return val1 
}
// console.log(calculateCartPrice2(2,3,4,5,6))//ismain hmisse jitne marzi oytput lesakte hain 
// first val1 and val2 main woahi store honge first  remaining sare vale num1 main store honge

//ab hm dekhain ge ke object ko hm function main kaise store krwa skate hain 

// const user = {
//     username : "Abdullah",
//     price : 100
// }

function calculateCartPrice3(anyobject){
// console.log(`${anyobject.username} has to pay ${anyobject.price}`);
 }
// calculateCartPrice3(user)  

//isko hm direct bhi krsakte hain function main 
calculateCartPrice3( {username : "Abdullah" , price : 100 } )



// isi trhan hm function main array bhi dal skate hian 
const myArr = [1,2,3,4,5]
function calculateCartPrice4(anyarray){
    // console.log(anyarray[2]);
}
// console.log(calculateCartPrice4(myArr))

//isi trhan array ko function main bhi pass kra skate haon

function calculateCartPrice5(anyarray){  
    return anyarray[2]
}
// console.log(calculateCartPrice5([1,2,3,4,5]))//isme hmne direct array pass kra hai function main    




// ++++++++++++ 
// ab hm aik newchwz dekhain ke function aik or reka se bhi declair hojata hai
addone(5);
function addone(num){
    return num+1
}  //ismian koi issue nahi hai kyon ke ismain hemain sai result dega normal exexute kia hai



addtwo(5);//yeh function abhi run ho rha hai but hmne isko declare nahi kra hai to ye error dega  , inke ismethod main error dega kyon ke isko uper declair kia hia 
const addtwo = function(num){
    return num+2
}