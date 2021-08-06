import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ name, setName }) => {
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          value={name}
          onChange={(e) => changeHandler(e)}
          className="input"
          placeholder="Search Pets"
          aria-label="Search Pets"
          aria-describedby="basic-addon2"
        />
        <Button
          className="button"
          variant="outline-secondary"
          id="button-addon2"
        >
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchBar;
