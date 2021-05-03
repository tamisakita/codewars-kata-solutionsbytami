// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if(array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));
