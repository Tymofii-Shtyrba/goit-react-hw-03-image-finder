import React, { Component } from 'react';
import { getData } from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css';

export default class App extends Component {
  state = {
    imagesData: [],
    total: 0,
    page: 1,
    query: '',
    isLoading: false,
    isModalOpen: false,
    modalImageRef: '',
  };

  submitHandler = formValue => {
    if (formValue.length === 0) return;

    this.setState({
      imagesData: [],
      page: 1,
      query: formValue,
      isLoading: true,
    });
  };

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
  };

  openModal = e => {
    const largeImageRef = this.state.imagesData.filter(image => {
      return image.id == e.target.id;
    })[0].largeImageURL;
    this.setState({
      isModalOpen: true,
      modalImageRef: largeImageRef,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (!this.state.isLoading) return;

    const { page, query } = this.state;

    try {
      const result = await getData(query, page);
      this.setState({
        imagesData: [...this.state.imagesData, ...result.hits],
        total: result.total,
        isLoading: false,
      });
    } catch (error) {}
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.submitHandler} />
        {this.state.imagesData.length !== 0 && (
          <ImageGallery
            imageData={this.state.imagesData}
            modalHandler={this.openModal}
          />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.total > 12 && <Button learnMore={this.loadMore} />}
        {this.state.isModalOpen && (
          <Modal
            largeImageRef={this.state.modalImageRef}
            onEsc={this.closeModal}
          />
        )}
      </div>
    );
  }
}
