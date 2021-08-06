import { useButtonState } from "../context/buttonStateContext";
import "./FilterButton.css";

const FilterButton = ({ name, icon, identity }) => {
  const { buttonState, setButtonState } = useButtonState();
  const clickHandler = () => {
    if (identity === "sortAsc" || identity === "sortDsc") {
      if (buttonState[identity] === true) {
        setButtonState({
          ...buttonState,
          [identity]: false
        });
      } else {
        setButtonState({
          ...buttonState,
          [identity === "sortAsc" ? "sortDsc" : "sortAsc"]: false,
          [identity]: true
        });
      }
    } else {
      if (buttonState[identity] === true) {
        setButtonState({
          ...buttonState,
          [identity]: false
        });
      } else {
        setButtonState({
          ...buttonState,
          [identity === "lessThan" ? "moreThan" : "lessThan"]: false,
          [identity]: true
        });
      }
    }
  };
  return (
    <button
      onClick={clickHandler}
      className={`${buttonState[identity] ? "active" : ""} filter-button`}
    >
      <i className={icon}></i> {name}
    </button>
  );
};

export default FilterButton;
