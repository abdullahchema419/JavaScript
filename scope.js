
// console.log(a) // 10
// console.log(b) // 20
// console.log(c) // 30

//yeah to sedha sedha hai 
// ab hmdekhain ge scop curly{} braces ko he hm scope bolte hain

if(true){
    var c=30
    let a=10
const b=20
 // 30
}
console.log(c)
console.log(a) 
console.log(b) 
//jo var ka scope haina woah all over the program hai or let or const ka within the paranthesis so islia hm var nahi use kte or let or const use krte hain

function one(){
    const username="hitesh"
    function two(){{
        const website = "youtube"
        console.log(username)

    }
    console.log(website) // error
    two()
}
//ismain hemare pas function main hi aik or functon hai hota kya hai ke child function parentse data lesakta hai ke bahr wala andr se nahi lesakta jaise website le reha hai to error areha hai