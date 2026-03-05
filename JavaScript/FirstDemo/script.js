// console.log("My first javascript file")

// var dog = "woof"
// let cat = "meow"
// const  BIRD = 'chirp'
// {
//     // var dog = "woof"
//     // {
//     //     dog = "meow"
//     // }
//     // console.log(dog)
//
//     let dog = "woof"
//     {
//         let dog = "meow"
//         console.log("inside: " + dog)
//     }
//     console.log(dog)
// }
//
// let num = 12
// let isMarried = true;
// console.log(typeof isMarried)

//browser only method: prompt
// let answer = prompt("What is your name?")
// console.log("Hello" + answer)

// let answer = prompt("How old are you?")
// // answer = Number(answer)
// answer = parseInt(answer)
// // testing to see if not a number
// if(isNaN(answer)){
//     //     write code here
// }
// console.log("You are " + answer + "years old!!!")
// console.log(typeof answer)
// console.log(Number())

// falsey values
// false, null, undefined, "", 0

// truthy values
// true, 1

// let count = 1
// count ++
// count = count + 1
// ++ count
// count += count

// let result = prompt("What is your favorite food?")
// // let sentence = "I love " + result
// // back tics!!!!
//
// let age = 22
// let sentence = `I love ${result} and I am ${age > 21 ? "Yeah!!!" : "Booo!!!"} years old!`
// console.log(sentence)

// if (age > 21) {
//     console.log("Yeah!!!")
// } else {
//     console.log("Booo!!!!")
// }

//ternary operators
// same as lines above, just simpler
// console.log(age > 21 ? "Yeah!!!" : "Booo!!!")

//DATES
const d  =new Date()
console.log(d)
let day = d.getDay()
console.log(day)
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let hh = d.getHours()
let mm = d.getMinutes()
let ss = d.getSeconds()

console.log(`Today is ${daysOfTheWeek[day]}, and the time is ${hh%12}:${mm}:${ss}.`)