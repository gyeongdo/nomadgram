import React from "react";
import styles from './styles.scss';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = (props, context) => (
  <footer className={cx("footer")}>
    <div className={cx("column")}>
      <nav className={cx("nav")}>
        <ul className={cx("list")}>
          <li className={cx("list-item")}>{context.t("About Us")}</li>
          <li className={cx("list-item")}>Support</li>
          <li className={cx("list-item")}>Contact Me</li>
          <li className={cx("list-item")}>API</li>
          <li className={cx("list-item")}>Blog</li>
          <li className={cx("list-item")}>Privacy</li>
          <li className={cx("list-item")}>Language</li>
        </ul>
      </nav>
    </div>
    <div className={cx("column")}>
      <span className={cx("copyright")}>
        ㈜ 2018 Leegyeongdo potfolio insta{" "}
      </span>
    </div>
  </footer>
);

Footer.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;