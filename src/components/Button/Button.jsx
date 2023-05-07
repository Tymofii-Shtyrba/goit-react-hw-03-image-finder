import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ learnMore }) {
  return (
    <button onClick={learnMore} className={css.Button} type="button">
      Learn more
    </button>
  );
}

Button.propTypes = {
  learnMore: PropTypes.func.isRequired,
};
