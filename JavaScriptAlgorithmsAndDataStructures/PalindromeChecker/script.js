// function palindrome(str) {
//   let b = str
//     .toLowerCase()
//     .split("")
//     .filter((char) => /[a-zA-Z\d]/gi.test(char))
//     .join("");
//   let a = str
//     .toLowerCase()
//     .split("")
//     .filter((char) => /[a-zA-Z\d]/gi.test(char))
//     .reverse()
//     .join("");
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("eEy *e"));

const inputElement = document.getElementById("searchbar");
const buttonElement = document.getElementById("button");
const resultElement = document.querySelector("#result");
const definitionElement = document.querySelector("#definition");

const compareInput = (word) => {
  if (word === "") {
    alert("Please provide a word to check");
  }
  //cleaning input
  let validWord = word.replace(/^(\W|_)*|(\W|_)*$/gi, "");
  validWord = validWord.replace(/(\W|_)/gi, "");

  // check against its reverse self
  if (validWord) {
    const resultCheck =
      validWord.toLowerCase() ===
      validWord.toLowerCase().split("").reverse().join("")
        ? true
        : false;

    //rendering result
    resultElement.style.display = "block";
    resultElement.innerHTML = `<span style="font-weight: bold">${word}</span> is ${
      resultCheck ? "" : "not"
    } a palindrome.`;
    definitionElement.style.display = "none";

    //clearing input for next word
    inputElement.value = "";
  }
};

buttonElement.addEventListener("click", () => compareInput(inputElement.value));

inputElement.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    compareInput(inputElement.value);
  } else return;
});
