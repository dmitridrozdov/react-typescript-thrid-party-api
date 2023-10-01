const fs = require('fs');

const wordList = [
  "apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "orange",
  "pear", "pineapple", "strawberry", "watermelon", "apricot", "blueberry", "cranberry", "elderberry", "guava", "honeydew",
  "lime", "papaya", "peach", "plum", "raspberry", "tangerine", "avocado", "blackberry", "coconut", "dragonfruit",
  "kiwifruit", "lychee", "passionfruit", "pomegranate", "boysenberry", "cantaloupe", "grapefruit", "mandarin", "mulberry", "nectarine",
  "bloodorange", "starfruit", "cucumber", "eggplant", "lettuce", "mushroom", "potato", "tomato", "zucchini",
  "asparagus", "broccoli", "carrot", "celery", "corn", "pepper", "spinach", "squash", "cabbage", "cauliflower",
  "kale", "radish", "turnip", "parsley", "garlic", "ginger", "vanilla", "cinnamon", "nutmeg", "basil",
  "thyme", "oregano", "rosemary", "cumin", "coriander", "paprika", "chocolate", "vanilla", "caramel", "butterscotch",
  "licorice", "toffee", "marshmallow", "hazelnut", "macadamia", "walnut", "almond", "pecan", "cashew", "peanut",
  "straw", "wood", "stone", "brick", "metal", "glass", "sand", "water", "fire", "earth",
  "sun", "moon", "star", "galaxy", "nebula", "comet", "asteroid", "planet", "space", "cosmos",
  "mountain", "valley", "river", "ocean", "desert", "forest", "jungle", "canyon", "island", "volcano",
  "whale", "dolphin", "shark", "octopus", "jellyfish", "seahorse", "penguin", "elephant", "giraffe", "lion",
  "tiger", "cheetah", "zebra", "kangaroo", "koala", "platypus", "alligator", "crocodile", "turtle", "tortoise",
  "snake", "lizard", "chameleon", "iguana", "unicorn", "dragon", "phoenix", "mermaid", "centaur", "griffin"
];

function charToWord(char) {
  const charCode = char.charCodeAt(0);
  const index = charCode - 97; // 'a' has char code 97
  if (index >= 0 && index < wordList.length) {
    return wordList[index];
  }
  return char; // Return the original character if not found
}

function wordToChar(word) {
  const index = wordList.indexOf(word);
  if (index !== -1) {
    const charCode = index + 97;
    return String.fromCharCode(charCode);
  }
  return word; // Return the original word if not found
}

function encodeEnv(input) {
  const words = input.split(/\s+/);
  const encodedWords = words.map((word) => {
    const encodedChars = Array.from(word).map(charToWord).join("-");
    return encodedChars;
  });
  return encodedWords.join(" ");
}

function decodeEnv(input) {
  const words = input.split(/\s+/);
  const decodedWords = words.map((word) => {
    const decodedChars = word.split("-").map(wordToChar).join("");
    return decodedChars;
  });
  return decodedWords.join(" ");
}

// Read the original text from the file
function readOriginalTextFromFile(filePath) {
  try {
    const originalText = fs.readFileSync(filePath, 'utf-8');
    return originalText;
  } catch (error) {
    console.error('Error reading the file:', error.message);
    return '';
  }
}

// Specify the path to the input file (e.g., input.txt)
const inputFilePath = 'input.txt';

// Read the original text from the file
// const originalTextFromFile = readOriginalTextFromFile(inputFilePath);
// console.log('Original Text from File:', originalTextFromFile);

// // Encode and decode the text
// const encodedText = encodeEnv(originalTextFromFile);
// console.log('Encoded:', encodedText);

const outputText = readOriginalTextFromFile('output.txt')

const decodedText = decodeEnv(outputText);
console.log('Decoded:', decodedText);
