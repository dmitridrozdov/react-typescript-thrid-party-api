function removeBetweenStars(text: string): string[] {
    // Split the text by lines, handling potential empty lines
    const lines = text.split("\n").filter((line) => line.trim() !== "");
  
    const result: string[] = [];
    let currentLine = "";
  
    for (const line of lines) {
      // Check for lines starting or ending with double asterisks
      if (line.startsWith("**") || line.endsWith("**")) {
        // Add the current accumulated line (if not empty) before starting a new one
        if (currentLine.trim() !== "") {
          result.push(currentLine.trim());
          currentLine = "";
        }
      } else {
        // Append trimmed content to the current line
        currentLine += line.trim() + " ";
      }
    }
  
    // Add the final accumulated line (if not empty)
    if (currentLine.trim() !== "") {
      result.push(currentLine.trim());
    }
  
    return result;
}

// Example usage
const text1 = `**Correct English sentence:** I think your request is not yet available for approval.

**Rephrases:**

1. Your approval request is currently unavailable.
2. The approval process for your request has not yet commenced.
3. I'm sorry, but your request cannot be approved at this time.`;

const text2 = `**Correct sentence:** How can I learn everything quickly?

**Rephrase 1:** What is the best way to learn new things quickly and effectively?

**Rephrase 2:** Can you provide me with strategies for rapidly absorbing and retaining information?

**Rephrase 3:** I want to develop a system for efficient and accelerated learning. How can I achieve this?`;

console.log(removeBetweenStars(text1));
console.log(removeBetweenStars(text2));