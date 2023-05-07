import React from 'react';
import css from './ImageGalleryItem.module.css';

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
