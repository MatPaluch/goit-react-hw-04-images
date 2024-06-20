import PropTypes from "prop-types";
import "../styles.css";

const Button = ({ buttonHandle }) => {
  return (
    <>
      <button type="button" className="Button" onClick={buttonHandle}>
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  buttonHandle: PropTypes.func,
};
export default Button;
