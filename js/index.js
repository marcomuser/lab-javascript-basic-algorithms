// Iteration 1: Names and Input
const hacker1 = "pauline";
const hacker2 = "marco";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log("Wow, you both have equally long names, XX characters!");
  };

// Iteration 3: Loops
const upperCased = hacker1.toUpperCase();
let spacedLetters = "";
for (i = 0; i < hacker1.length; i++) {
  spacedLetters += upperCased[i] + " ";
}

console.log(spacedLetters);


let reversedName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  reversedName += hacker2[j];
}
console.log(reversedName);


