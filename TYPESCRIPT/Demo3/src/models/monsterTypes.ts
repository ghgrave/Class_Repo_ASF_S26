export interface Monster {
    firstName: string; // Every monster needs a name
    lastName?: string;
    age: number; // Every monster has an age
    type: "Human" | "Blob" | "Undead"; // Choose a type
    moreInfo: string; // Fun fact about the monster
}

export interface SuperMonster extends Monster {
    powerLevel: number;
}

