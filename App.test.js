import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pet from "../components/Pet";

test("should set a pet's adopted status to true", () => {
  const pet = {
    id: 1,
    name: "Fido",
    species: "dog",
    adopted: false,
  };

  const onAdoptPet = jest.fn();

  render(<Pet pet={pet} onAdoptPet={onAdoptPet} />);

  const adoptButton = screen.getByRole("button", { class: "adopt-button" });

  fireEvent.click(adoptButton);

  expect(onAdoptPet).toHaveBeenCalledWith(pet.id);
  expect(pet.adopted).toBe(true);
});