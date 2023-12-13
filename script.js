function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1.length === 0 || s2.length === 0) {
    return '';
  }

  // Extract the initial letters of the input strings
  const initialLetters = s1[0] + s2[0];

  return initialLetters;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
