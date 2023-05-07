import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ imageData, modalHandler }) {
  return (
    <ul className={css.ImageGallery}>
      {imageData.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            imageData={image}
            modalHandler={modalHandler}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  imageData: PropTypes.array.isRequired,
  modalHandler: PropTypes.func.isRequired,
};
