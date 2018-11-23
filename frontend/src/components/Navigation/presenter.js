import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Navigation = (props, context) => (
  <div className={cx('navigations')}>
    <div className={cx('inner')}>
      <div className={cx('column')}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={cx('logo')}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={cx('column')}>
        <form method="post" onSubmit={props.onSubmit}>
          <input
            type="text"
            placeholder={context.t("Search")}
            className={cx('searchInput')}
            value={props.value}
            onChange={props.onInputChange}
          />
        </form>
      </div>
      <div className={cx('column')}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Navigation;
