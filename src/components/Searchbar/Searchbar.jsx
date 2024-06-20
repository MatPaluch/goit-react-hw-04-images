import PropTypes from "prop-types";
import "../styles.css";

const Searchbar = ({ handleSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="inputSearch"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Searchbar;
