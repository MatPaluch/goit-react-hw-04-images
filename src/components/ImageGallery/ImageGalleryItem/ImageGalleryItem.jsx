import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles.css";
import Modal from "../../Modal/Modal";

const ImageGalleryItem = ({ src, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const modal = () => {
    setShowModal(true);
  };
  const modalOff = () => {
    setShowModal(false);
  };
  const modalKey = (ev) => {
    if (ev.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const height = document.body.scrollHeight;
    window.scrollTo({ top: height, behavior: "smooth" });
  }, []);

  return (
    <li className="ImageGalleryItem" tabIndex={0} onKeyDown={modalKey}>
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={modal}
      />
      {showModal && <Modal srcBig={alt} handleModal={modalOff}></Modal>}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
