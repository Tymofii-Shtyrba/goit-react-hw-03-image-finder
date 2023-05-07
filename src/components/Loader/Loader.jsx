import { Blocks } from 'react-loader-spinner';
import React from 'react';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.Loader_wrapper}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
}
