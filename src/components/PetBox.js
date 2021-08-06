import "./PetBox.css";
import { calculate_age } from "../util";

const PetBox = ({ name, age }) => {
  return (
    <div className="box">
      <h3>{name}</h3>
      <h4>Age: {calculate_age(age)} months</h4>
    </div>
  );
};

export default PetBox;
