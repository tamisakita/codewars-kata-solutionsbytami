// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
  let alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '.split('');
  let result = [];

  x.forEach(element => {
    result.push(alphabet[element - 1]);
  });

  return result.join('');
  console.log(result.join(''));
}

switcher(['4', '24']);
