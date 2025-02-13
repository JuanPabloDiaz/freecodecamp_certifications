function rot13(str) {
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // check if it's an uppercase letter
      charCode = ((charCode - 65 + 13) % 26) + 65; // apply ROT13 algorithm
    }

    decoded += String.fromCharCode(charCode); // append decoded character to string
  }

  return decoded;
}

rot13("SERR PBQR PNZC");
// console.log(rot13("SERR PBQR PNZC"));
