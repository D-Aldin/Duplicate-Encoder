// -------------------------------------------------- Duplicate Encoder ------------------------------------------------------------------------

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// BUG

function encoder(string) {
  const letterObject = {};
  const lowerString = string.toLowerCase();
  newString = '';

  // Count occurrences of each character
  for (const letter of lowerString) {
    letterObject[letter] = (letterObject[letter] || 0) + 1;
  }

  for (const elemet of lowerString) {
    console.log(letterObject[elemet]);

    newString += letterObject[elemet] > 1 ? ')' : '(';
  }

  return newString;
}

encoder('aldinn'); // "((("
console.log(encoder('recede')); // "()()()"
console.log(encoder('success')); // ")())())"
