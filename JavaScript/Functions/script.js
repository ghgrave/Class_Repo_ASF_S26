// (function(){
//     // runc somehting
// })()
// //IIFE
// function doggy(){
//     // do something?
// }
// doggy()
//  let kittyCat = function(stuff, andMoreStuff){
//     // do something
//  }
//  kittyCat()

// let square = function(num){
//     return num*num
// }

// let square = (num) =>{
//     return num*num
// }

// let square = num => {
//     return num*num
// }

// implies return - one line
// let square = num =>num*num

//
// let square = (num, age)=> {
//     num = num + num
//     return num
// }
//
// console.log(square(8))


let canYouDrink = (age = false, favDrink = "Coors Light") => {
    let result = age ? "Congrats!!" : "Sucker!!!"
    return `You like ${favDrink}, ${result}`
}
console.log(canYouDrink(true))
console.log(canYouDrink(undefined, "Diet Coke"))
