export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div
      className="mood-board-item"
      style={{
        backgroundColor: color,
      }}
    >
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <MoodBoardItem
        color="#4F7CAC"
        image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
        description="Bogota"
      />
      <MoodBoardItem
        color="#C0E0DE"
        image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
        description="Medellin"
      />
      <MoodBoardItem
        color="#162521"
        image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
        description="Cali"
      />
      <MoodBoardItem
        color="#3C474B"
        image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
        description="Barranquilla"
      />
      <MoodBoardItem
        color="#768948"
        image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
        description="Cartagena"
      />
      <MoodBoardItem
        color="#352D39"
        image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
        description="Santa Marta"
      />
    </div>
  );
};
