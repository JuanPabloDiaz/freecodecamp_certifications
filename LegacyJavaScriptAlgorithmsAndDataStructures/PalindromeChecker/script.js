function palindrome(str) {
  let b = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-zA-Z\d]/gi.test(char))
    .join("");
  let a = str
    .toLowerCase()
    .split("")
    .filter((char) => /[a-zA-Z\d]/gi.test(char))
    .reverse()
    .join("");
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eEy *e"));
