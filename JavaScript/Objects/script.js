// cool stuff about objects

let dog = "woof"
let cat = "meow"

// if keys and variables are the same, you can shortcut
let animals = {
    dog,
    cat
}

// same as:
//     let animals = {
//         dog : dog,
//         cat: cat
//     }

console.log(animals.cat)

// two reference values in objects
// bracket and dot notation
console.log(animals["dog"])
console.log(animals.dog)
console.log(animals[dog])

