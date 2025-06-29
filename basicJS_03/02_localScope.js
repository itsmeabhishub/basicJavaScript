(function(){
 var d = 10
})()
//iife limits the global scope variable to block scope 


// Global scope:- var
// Local scope:- let/const



{
    let a =10
    const b=20
}
// not able to fetch out scope

var c = 30

// able to get globally
// console.log(d) //not able to get this


function outerCheck() {
    const userName = 'Abhi'
    function innerCheck (){
        const webSite= " Github"
        console.log(`${userName} ${webSite}`)
    }
    // console.log(Website)// this is out of scope not reachable for outer function
    innerCheck()
}
outerCheck()


console.log(one(4));
function one(num1){
    return num1+1
}

//  console.log(two(6)); // befor defening of function that is like experesion we cant get
 const two = function(num1){
    return num1+1
 }

 console.log(two(6))

 
 
//  let a = 10
{
     var a = 10// illegal shadowing
    console.log(a)
    // console.log(d)
 }
 function b(){
     var a = 10// illegal shadowing
    console.log(a)
    // console.log(d)
 }
//  var a= 10
 b()
  var d =15
  var d =15
 
