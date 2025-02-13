document.getElementById("search-button").addEventListener("click", async () => {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${query}`;

  // Clear existing content
  document.getElementById("pokemon-name").textContent = "";
  document.getElementById("pokemon-id").textContent = "";
  document.getElementById("weight").textContent = "";
  document.getElementById("height").textContent = "";
  document.getElementById("types").innerHTML = "";
  document.getElementById("hp").textContent = "";
  document.getElementById("attack").textContent = "";
  document.getElementById("defense").textContent = "";
  document.getElementById("special-attack").textContent = "";
  document.getElementById("special-defense").textContent = "";
  document.getElementById("speed").textContent = "";

  const existingSprite = document.getElementById("sprite");
  if (existingSprite) existingSprite.remove();

  // Fetch Pokémon data
  try {
    const response = await fetch(url);

    if (!response.ok) {
      window.alert("Pokémon not found");
      return;
    }

    const data = await response.json();

    // Fetch and display Pokémon data
    document.getElementById("pokemon-name").textContent =
      data.name.toUpperCase();
    document.getElementById("pokemon-id").textContent = `#${data.id}`;
    document.getElementById("weight").textContent = data.weight;
    document.getElementById("height").textContent = data.height;
    document.getElementById("hp").textContent = data.stats.find(
      (stat) => stat.stat.name === "hp"
    ).base_stat;
    document.getElementById("attack").textContent = data.stats.find(
      (stat) => stat.stat.name === "attack"
    ).base_stat;
    document.getElementById("defense").textContent = data.stats.find(
      (stat) => stat.stat.name === "defense"
    ).base_stat;
    document.getElementById("special-attack").textContent = data.stats.find(
      (stat) => stat.stat.name === "special-attack"
    ).base_stat;
    document.getElementById("special-defense").textContent = data.stats.find(
      (stat) => stat.stat.name === "special-defense"
    ).base_stat;
    document.getElementById("speed").textContent = data.stats.find(
      (stat) => stat.stat.name === "speed"
    ).base_stat;

    const spriteElement = document.createElement("img");
    spriteElement.id = "sprite";
    spriteElement.src = data.sprites.front_default;
    document.getElementById("sprite-container").appendChild(spriteElement);

    const typesDiv = document.getElementById("types");
    if (typesDiv) {
      typesDiv.innerHTML = "";
      data.types.forEach((type) => {
        const typeElement = document.createElement("div");
        typeElement.textContent = type.type.name.toUpperCase();
        typesDiv.appendChild(typeElement);
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    window.alert("Pokémon not found");
  }
});
