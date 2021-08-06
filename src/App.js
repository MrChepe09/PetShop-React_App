import SearchBar from "./components/SearchBar";
import "./styles.css";
import ButtonList from "./components/ButtonList";
import { useEffect, useState } from "react";
import axios from "axios";
import PetBox from "./components/PetBox";
import { useButtonState } from "./context/buttonStateContext";
import { calculate_age } from "./util";

export default function App() {
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState("");
  const { buttonState } = useButtonState();

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const petsData = await axios.get(
          "https://60d075407de0b20017108b89.mockapi.io/api/v1/animals"
        );
        setPets(petsData.data);
        // console.log(pets);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchMyAPI();
  }, []);

  const configPets = (pets) => {
    let newPets = pets.filter((pet) =>
      pet.name.toLowerCase().includes(petName.toLowerCase())
    );
    console.log("helo");
    if (buttonState.sortAsc === true) {
      newPets = newPets.sort(function (a, b) {
        return new Date(b.bornAt) - new Date(a.bornAt);
      });
    }
    if (buttonState.sortDsc === true) {
      newPets = newPets.sort(function (a, b) {
        return new Date(a.bornAt) - new Date(b.bornAt);
      });
    }
    if (buttonState.lessThan === true) {
      newPets = newPets.filter((pet) => calculate_age(pet.bornAt) < 1);
    }
    if (buttonState.moreThan === true) {
      newPets = newPets.filter((pet) => calculate_age(pet.bornAt) > 1);
    }
    return newPets;
  };
  return (
    <div className="App">
      <h2 className="heading">My Pets</h2>
      <SearchBar name={petName} setName={setPetName} />
      <ButtonList />
      {configPets(pets).map((pet) => (
        <PetBox key={pet.id} name={pet.name} age={pet.bornAt} />
      ))}
    </div>
  );
}
