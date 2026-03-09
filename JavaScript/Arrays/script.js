let animals = ["dog", "cat", "mouse"]


// Keno adopted a new cat
//4 ways to alter an array by adding/deleting first elements
// append means = add to end
// prepend means = add to beginning
animals.push("cat2")
console.log(animals)
// pop()
let unlovedAnimalTahtKenoHates = animals.pop()
console.log(unlovedAnimalTahtKenoHates)
animals.unshift("cat2")
console.log(animals)
animals.shift()
console.log(animals)

// new array
let houses = ["doghouse", "scratching post", "cage"]
// animals.push(houses)
// console.log(animals)

// spread operator
let newArray = [...animals, ...houses]
console.log(newArray)

//iterating through an array
//forEach()
newArray.forEach(
    // need a predicate = data
    function(doggy){
     console.log(doggy+ "'s")
})

// iterate an array
// map()
// difference between forEach() and map(), map() returns a NEW array!!!!!
let colors = ["red", "green", "blue"]
let result = colors.map(function(data){
    return data + "'s"
    }
)
console.log(result)
console.log(result.length)
for(let i = 0; i <= result.length; i++){
    console.log(result[i])
}
result.slice(1, result.length-1)


//filtering aka filter()
//returns a new array with only the matching conditions
let words = ["cat", "house","mouse"]
result = words.filter(function(kitty){
    return kitty.slice(1, kitty.length) === "ouse"
    }
)
console.log(result)
