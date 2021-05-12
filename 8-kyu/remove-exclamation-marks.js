// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let string = s.split('');
  let newString = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '!') {
      newString.push(string[i]);
      continue
    }
  }

  return newString.join('');
}

console.log(removeExclamationMarks("Hello World!"));
