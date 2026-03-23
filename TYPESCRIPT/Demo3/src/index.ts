import { Monster, SuperMonster } from "./models/monsterTypes";


const monster1: Monster = {
    firstName: "Zorg",
    age: 500,
    type: "Undead",
    moreInfo: "Terrifies entire galaxies"
};

// Blobbo is a 3-year-old Blob with an insatiable
// appetite for absorption. With no last name, Blobbo's unique ability allows it to absorb everything in sight, ' +
// 'making it a fascinating yet unpredictable entity.
const monster2: Monster = {
    firstName: "Blobbo",
    age: 3,
    type: "Blob",
    moreInfo: "unique ability allows it to absorb everything"
};

// Alice Smith is a 28-year-old Human who dedicates
// her life to monster research. With a keen intellect and
// a deep curiosity, she studies various creatures to better understand their behaviors and abilities.
const monster3: Monster = {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: "Human",
    moreInfo: "a deep curiosity, she studies various creatures to better understand their behaviors and abilities."
};

console.log(monster1);
console.log(monster2);
console.log(monster3);