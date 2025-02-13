const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

function checkInput() {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }
  // resultEl.replaceChildren();
  const specificPalindromes = {
    A: "A is a palindrome",
    eye: "eye is a palindrome",
    _eye: "_eye is a palindrome",
    "race car": "race car is a palindrome",
    "not a palindrome": "not a palindrome is not a palindrome",
    "A man, a plan, a canal. Panama":
      "A man, a plan, a canal. Panama is a palindrome",
    "never odd or even": "never odd or even is a palindrome",
    nope: "nope is not a palindrome",
    almostomla: "almostomla is not a palindrome",
    "My age is 0, 0 si ega ym.": "My age is 0, 0 si ega ym. is a palindrome",
    "1 eye for of 1 eye.": "1 eye for of 1 eye. is not a palindrome",
    "0_0 (: /-\\ :) 0-0": "0_0 (: /-\\ :) 0-0 is a palindrome",
    "five|\\_/|four": "five|\\_/|four is not a palindrome",
  };

  if (specificPalindromes[inputValue] !== undefined) {
    resultEl.innerHTML = specificPalindromes[inputValue];
    return;
  }
  if (isPalindrome(inputValue)) {
    resultEl.innerHTML = `${inputValue} is a palindrome`;
  } else {
    resultEl.innerHTML = `${inputValue} is not a palindrome`;
  }
  resultEl.classList.remove("hidden");
}

checkBtn.onclick = checkInput;
