// Anagram Checker
function isAnagram(str1, str2) {
  // Helper function to process strings
  const cleanString = (str) =>
    str.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  const processedStr1 = cleanString(str1);
  const processedStr2 = cleanString(str2);

  return processedStr1 === processedStr2;
}

// Example usage:
console.log(isAnagram("Astronomer", "Moon starer")); // Expected output: true
console.log(isAnagram("School master", "The classroom")); // Expected output: true
console.log(isAnagram("The Morse Code", "Here come dots")); // Expected output: true
console.log(isAnagram("Hello", "World")); // Expected output: false
