let input = "The boy bought the basketball";
const vowels = ["a", "e", "i", "o", "u"];

const resultsArray = [];

for (let i = 0; i < input.length; i++) {
  let inputLetter = input[i];

  if (inputLetter === "e") {
    resultsArray.push(inputLetter);
  }

  if (inputLetter === "u") {
    resultsArray.push(inputLetter);
  }

  for (let j = 0; j < vowels.length; j++) {
    let vowel = vowels[j];

    if (inputLetter === vowel) {
      resultsArray.push(vowel);
    }
  }
}

let whaleNoise = resultsArray.join("");
console.log("Whale Talk: " + whaleNoise.toUpperCase());
