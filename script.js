// -------------------------------------------------- Duplicate Encoder ------------------------------------------------------------------------

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// BUG
// const str1 = 'din';
// const str2 = 'recede'; //"()()()"
const str3 = 'Success'; //")())())"

// function encoder(string) {
//   let counter = 1;
//   let newString = '';
//   let condition = false;

//   for (let i = 0; i < string.length; i++) {
//     for (let j = i === 0 ? 1 : i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         condition = true;
//         break;
//       } else {
//         condition = false;
//       }
//     }
//     if (condition === true) {
//       newString += ')';
//     } else {
//       newString += '(';
//     }
//   }
//   return newString;
// }

function encoder(string) {
  let newString = '';

  let objectContainer = {};
  for (let char of string.toLocaleLowerCase()) {
    objectContainer[char] = (objectContainer[char] || 0) + 1;
  }
  console.log(objectContainer);
}

encoder(str3);
