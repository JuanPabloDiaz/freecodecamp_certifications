// This is a shorter version of the TelephoneNumberValidator script

function telephoneCheck(str) {
  return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555");
