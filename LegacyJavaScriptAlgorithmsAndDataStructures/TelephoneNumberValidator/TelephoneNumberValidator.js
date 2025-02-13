function telephoneCheck() {
  let string = document.getElementById("phoneNumber");
  let str = String(string.value);

  let formatChecker = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

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
