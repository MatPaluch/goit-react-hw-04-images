import PropTypes from "prop-types";
import "../styles.css";

const Modal = ({ handleModal, srcBig }) => {
  return (
    <div className="Overlay" onClick={handleModal}>
      <div className="Modal">
        <img src={srcBig} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  handleModal: PropTypes.func,
  srcBig: PropTypes.string,
};
export default Modal;
