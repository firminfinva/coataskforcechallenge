function stringTransformation(input) {
  let output = "";

  // Check if the length of the string is divisible by 3
  if (input.length % 3 === 0) {
    // Reverse the entire string
    output = input.split("").reverse().join("");
  }

  // Check if the length of the string is divisible by 5
  if (input.length % 5 === 0) {
    // Replace each character with its ASCII code
    output = input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // Check if the length of the string is divisible by both 3 and 5
  if (input.length % 15 === 0) {
    // Reverse the entire string
    output = input.split("").reverse().join("");
    // Replace each character with its ASCII code
    output = output
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  // If none of the conditions are met, return the original string
  if (!output) {
    output = input;
  }

  return output;
}

// Example that are used to check the code
console.log(stringTransformation("coders")); // Output: "sredoc"
console.log(stringTransformation("challanges")); // Output: "99 104 97 108 108 97 110 103 101 115"
console.log(stringTransformation("code trak force challange")); // Output : "99 111 100 101 32 116 114 97 107 32 102 111 114 99 101 32 99 104 97 108 108 97 110 103 101"
