const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertToRoman = (num) => {
  let roman = "";
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
};

button.addEventListener("click", () => {
  const inputValue = input.value;

  if (inputValue.trim() === "") {
    result.textContent = "Please enter a valid number";
    return;
  }

  const num = parseInt(inputValue);

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number"; // Handle non-numeric input
    return;
  }

  if (num < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const roman = convertToRoman(num);
  result.textContent = roman;
});
