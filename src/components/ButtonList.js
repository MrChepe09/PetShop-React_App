import FilterButton from "./FilterButton";
import "./ButtonList.css";

const ButtonList = () => {
  return (
    <div className="button-list">
      <FilterButton
        identity="sortAsc"
        icon="fas fa-sort"
        name="Sort - Low to High"
      />
      <FilterButton
        identity="sortDsc"
        icon="fas fa-sort"
        name="Sort - High to Low"
      />
      <FilterButton
        identity="lessThan"
        icon="fas fa-filter"
        name="Less than 1 Month Old"
      />
      <FilterButton
        identity="moreThan"
        icon="fas fa-filter"
        name="More than 1 Month Old"
      />
    </div>
  );
};

export default ButtonList;
