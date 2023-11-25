import React from "react";
import Pet from "./Pet";

const PetBrowser = ({ pets, onAdoptPet }) => {
  return (
    <div className="pet-browser">
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
      ))}
    </div>
  );
};

export default PetBrowser;