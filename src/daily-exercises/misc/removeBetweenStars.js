function removeBetweenStars(text) {
    // Split the text by lines, handling potential empty lines
    var lines = text.split("\n").filter(function (line) { return line.trim() !== ""; });
    var result = [];
    var currentLine = "";
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        // Check for lines starting or ending with double asterisks
        if (line.startsWith("**") || line.endsWith("**")) {
            // Add the current accumulated line (if not empty) before starting a new one
            if (currentLine.trim() !== "") {
                result.push(currentLine.trim());
                currentLine = "";
            }
        }
        else {
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
var text1 = "**Correct English sentence:** I think your request is not yet available for approval.\n\n**Rephrases:**\n\n1. Your approval request is currently unavailable.\n2. The approval process for your request has not yet commenced.\n3. I'm sorry, but your request cannot be approved at this time.";
var text2 = "**Correct sentence:** How can I learn everything quickly?\n\n**Rephrase 1:** What is the best way to learn new things quickly and effectively?\n\n**Rephrase 2:** Can you provide me with strategies for rapidly absorbing and retaining information?\n\n**Rephrase 3:** I want to develop a system for efficient and accelerated learning. How can I achieve this?";
console.log(removeBetweenStars(text1));
console.log(removeBetweenStars(text2));
