import React from 'react';
import css from './Button.module.css';

export default function Button({ learnMore }) {
  return (
    <button onClick={learnMore} className={css.Button} type="button">
      Learn more
    </button>
  );
}
