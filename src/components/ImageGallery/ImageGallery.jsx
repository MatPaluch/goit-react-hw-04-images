import PropTypes from "prop-types";
import "../styles.css";

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      {data.map((elem) => (
        <ImageGalleryItem
          src={elem.webformatURL}
          key={elem.id}
          alt={elem.largeImageURL}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  data: PropTypes.array,
};
export default ImageGallery;
