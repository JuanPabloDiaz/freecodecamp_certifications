let lunches = [];

function addLunchToEnd(lunchMenu, lunchItem) {
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunchMenu;
}

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");

function addLunchToStart(lunchMenu, lunchItem) {
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchMenu;
}

addLunchToStart(lunches, "Sushi");
addLunchToStart(["Burger", "Sushi"], "Pizza");

function removeLastLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedItem = lunchMenu.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
    return lunchMenu;
  }
}

removeLastLunch([]);
removeLastLunch(["Sushi", "Pizza", "Noodles"]);

function removeFirstLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedItem = lunchMenu.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
    return lunchMenu;
  }
}

removeFirstLunch([]);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);

function getRandomLunch(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunchMenu.length);
    const randomLunch = lunchMenu[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
    return randomLunch;
  }
}

getRandomLunch([]);
getRandomLunch(["Salad", "Eggs", "Cheese"]);

function showLunchMenu(lunchMenu) {
  if (lunchMenu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunchMenu.join(", ")}`);
  }
}

showLunchMenu([]);
showLunchMenu(["Greens", "Corns", "Beans"]);
