const chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total chai Types: ${chaiTypes.length}`);

// chaiTypes.push("Herbal Tea"); // Insert at the end of array
// chaiTypes.pop(); // Removes from the end of array and returns that element

// let index = chaiTypes.indexOf("Green-Tea"); // Doesn't exist in array
// console.log(index);

// let index = chaiTypes.indexOf("Green Tea"); // 2
// console.log(index); // 2

// if (index !== -1) {
//     chaiTypes.splice(index, 1);
// }

// console.log(chaiTypes);

chaiTypes.forEach((chai, index) => {
    // console.log(`${index + 1}: ${chai}`);
})

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [ ...chaiTypes, "Chamolina Tea"]; // It unpacks the chaiTypes using spread operator
// console.log(newChaiTypes);


// Object Literals
let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices: ["Daalchini", "Ginger"]
    },
    instructions: "Boil water, add tea leaves, milk, sugar and spices"
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecipe = { // Overwrite Instruction in this, and we can also add new properties
    ...chaiRecipe,
    instructions: "Boil water, and tea leaves, milk, sugar, spices with some love"
} 

// console.log(updatedChaiRecipe);

let {name, ingredients} = chaiRecipe; // Object Destructuring
let [firstChai, secondChai] = chaiTypes; // Array Destructuring
// let [value, setValue] = useState();

console.log(ingredients);
console.log(name); // Masala Chai
console.log(secondChai);