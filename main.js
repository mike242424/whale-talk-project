let input = "The boy bought the basketball";
const vowels = ["a", "e", "i", "o", "u"];

resultsArray = [];

for (let i = 0; i < input.length; i++) {
  let element1 = input[i];

  if (element1 === "e") {
    resultsArray.push(element1);
  }

  if (element1 === "u") {
    resultsArray.push(element1);
  }

  for (let j = 0; j < vowels.length; j++) {
    let element2 = vowels[j];

    if (element1 === element2) {
      resultsArray.push(element2);
    }
  }
}

let whaleNoise = resultsArray.join("");
console.log("Whale Talk: " + whaleNoise.toUpperCase());
