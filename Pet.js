import React from 'react';

const PetBrowser = ({ pets, onAdoptPet }) => {
  const renderPets = pets ? pets.map((pet) => (
    <div key={pet.id}>
      <h2>{pet.name}</h2>
      <p>{pet.type}</p>
      <button onClick={() => onAdoptPet(pet.id)}>Adopt</button>
    </div>
  )) : null;

  return <div className="pet-browser">{renderPets}</div>;
};

export default PetBrowser;