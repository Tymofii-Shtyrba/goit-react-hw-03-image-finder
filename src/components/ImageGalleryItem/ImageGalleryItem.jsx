import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ imageData, modalHandler }) {
  const { id, webformatURL, largeImageURL } = imageData;
  return (
    <li className={css.ImageGalleryItem} onClick={modalHandler}>
      <img
        id={id}
        className={css.ImageGalleryItem_image}
        src={webformatURL}
        alt={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object.isRequired,
  modalHandler: PropTypes.func.isRequired,
};
