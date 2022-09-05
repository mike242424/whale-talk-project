let input = "The boy bought the basketball";
const vowels = ["a", "e", "i", "o", "u"];

const resultsArray = [];

for (let i = 0; i < input.length; i++) {
  let inputLetter = input[i].toLocaleLowerCase();

  if (inputLetter === "e" || inputLetter === "u") {
    resultsArray.push(inputLetter);
  }

  for (let j = 0; j < vowels.length; j++) {
    let vowel = vowels[j].toLocaleLowerCase();

    if (inputLetter === vowel) {
      resultsArray.push(vowel);
    }
  }
}

let whaleNoise = resultsArray.join("").toLocaleUpperCase();

console.log("Whale Talk: " + whaleNoise);
