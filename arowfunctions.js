// const  chai = () =>{
//     let username = "Abdullah";
//     console.log(username);
// }
// chai();
//arrow function ko hm istrhan declair krte hain isko hm aik variable chai main store krwarshe hain
 //isko explicitely return kehte hain
const chai2 = (num1, num2) => {
    return num1 + num2;
}
console.log(chai2(5, 10));


// hmisko implicitely istrhan bhi run krsakte hian

const chai3 = (num1 , num2) => num1 + num2;
console.log(chai3(5, 10));

//agr hm curly braces main wrapkrainge to return krna parega agr hm round pranthesis main wrap krainge to return nahikrna parega
const chai4=(num1 , num2) => (num1 + num2);