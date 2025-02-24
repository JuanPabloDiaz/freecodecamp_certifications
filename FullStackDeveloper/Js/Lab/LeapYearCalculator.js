function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return year + " is a leap year.";
        // Divisible by 400, leap year
      } else {
        return year + " is not a leap year.";
        // Divisible by 100 but not 400, not a leap year
      }
    } else {
      return year + " is a leap year.";
      // Divisible by 4 but not 100, leap year
    }
  } else {
    return year + " is not a leap year.";
    // Not divisible by 4, not a leap year
  }
}

let year = 2000;
let result = isLeapYear(year);
console.log(result);
// 2000 is a leap year.

year = 2024;
result = isLeapYear(year);
console.log(result);
// 2024 is a leap year.

year = 1900;
result = isLeapYear(year);
console.log(result);
// 1900 is not a leap year.
