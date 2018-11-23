import React from 'react';
import styles from './styles.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Loading = props => (
  <div className={cx('container')}>
    <img
      src={require("images/loading.png")}
      className={cx('spinner')}
      alt="loading"
    />
  </div>
);

export default Loading;