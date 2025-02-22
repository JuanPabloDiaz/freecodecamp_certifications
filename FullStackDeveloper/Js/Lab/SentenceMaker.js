let adjective, noun, verb, place, adjective2, noun2;

adjective = "string";
noun = "kia";
verb = "run";
place = "Colombia";
adjective2 = "something";
noun2 = "Pablo";
let firstStory =
  "Once upon a time, there was a(n) " +
  adjective +
  " " +
  noun +
  " who loved to eat " +
  noun2 +
  ". The " +
  noun +
  " lived in a " +
  place +
  " and had " +
  adjective2 +
  " nostrils that blew fire when it was " +
  verb +
  ".";

console.log("First story: " + firstStory);

let secondStory;
adjective = "mighty";
noun = "dragon";
verb = "dancing";
place = "a volcano";
adjective2 = "sparkling";
noun2 = "tacos";

secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

console.log(`Second story: ${secondStory}`);

// Output:
// First story: Once upon a time, there was a(n) string kia who loved to eat Pablo. The kia lived in a Colombia and had something nostrils that blew fire when it was run.
// Second story: Once upon a time, there was a(n) mighty dragon who loved to eat tacos. The dragon lived in a a volcano and had sparkling nostrils that blew fire when it was dancing.
