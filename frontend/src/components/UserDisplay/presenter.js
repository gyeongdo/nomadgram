import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserDisplay = (props, context) => (
  <div className={props.horizontal ? cx("horizontal") : cx("vertical")}>
    <div className={cx("column")}>
      <img
        src={props.user.profile_image || require("images/noPhoto.jpg")}
        alt={props.user.username}
        className={props.big ? cx("bigAvatar") : cx("avatar")}
      />
      <div className={cx("user")}>
        <span className={cx("username")}>{props.user.username}</span>
        <span className={cx("name")}>{props.user.name}</span>
      </div>
    </div>
    <span className={cx("column")}>
      <button className={cx("button")} onClick={props.handleClick}>
        {props.user.following ? context.t("Unfollow") : context.t("Follow")}
      </button>
    </span>
  </div>
);

UserDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    following: PropTypes.bool.isRequired
  }).isRequired,
  big: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
};

export default UserDisplay;
