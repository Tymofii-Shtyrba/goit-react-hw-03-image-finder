import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleBackdropClicl = e => {
    if (e.target !== e.currentTarget) return;
    this.props.onEsc();
  };

  handleKeyDown = e => {
    if (e.code !== 'Escape') return;
    this.props.onEsc();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClicl}>
        <div className={css.Modal}>
          <img src={this.props.largeImageRef} alt="xxx" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageRef: PropTypes.string.isRequired,
  onEsc: PropTypes.func.isRequired,
};
