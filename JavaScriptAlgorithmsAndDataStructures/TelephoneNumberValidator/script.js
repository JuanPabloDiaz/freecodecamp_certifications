function checkNumber() {
  if (userInput.value == "") {
    return alert("Please provide a phone number");
  }

  // Create a new list item
  let item = document.createElement("li");
  resultsDiv.appendChild(item);

  // Add text to the list item
  if (formatChecker.test(str) == 1) {
    string.value = "";
    answer.innerHTML = "";
    answer.innerHTML += `${str} is a valid phone number.`;
  } else {
    string.value = "";
    answer.innerHTML = "";
    answer.innerHTML = `${str} is not a valid phone number`;
  }
}

// ========================

let userInput = document.getElementById("user-input");
let checkBtn = document.getElementById("check-btn");
let clearBtn = document.getElementById("clear-btn");
let resultsDiv = document.getElementById("results-div");

function checkNumber() {
  const FORMAT_CHECKER_REGEX =
    /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (userInput.value == "") {
    return alert("Please provide a phone number");
  }

  let item = document.createElement("li");
  resultsDiv.appendChild(item);

  if (FORMAT_CHECKER_REGEX.test(userInput.value)) {
    item.innerHTML = "Valid US number: " + userInput.value;
    item.classList.add("valid");
    userInput.value = "";
  } else {
    item.innerHTML = "Invalid US number: " + userInput.value;
    item.classList.add("invalid");
    userInput.value = "";
  }
}
function clearInput() {
  userInput.value = "";
  resultsDiv.innerHTML = "";
}
checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", clearInput);

// clearBtn.addEventListener("click", () => {
//   resultsDiv.innerHTML = "";
// })

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber();
  }
});

// telephoneCheck("555-555-5555");
