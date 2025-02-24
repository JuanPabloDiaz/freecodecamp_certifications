function maskEmail(email) {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    return email; // Handle invalid email (no '@')
  }

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedUsername = firstChar + "*".repeat(username.length - 2) + lastChar;

  return maskedUsername + domain;
}

let email = "juan.diaz@email.com";
maskEmail(email);
console.log(maskEmail(email));
// j*******z@email.com

email = "juan@jpdiaz.dev";
maskEmail(email);
console.log(maskEmail(email));
// j**n@jpdiaz.dev

email = "juan@example.com";
maskEmail(email);
console.log(maskEmail(email));
// j**n@example.com
