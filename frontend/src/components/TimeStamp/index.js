import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TimeStamp = (props, context) => (
    <span className={cx("time")}>{props.time}</span>
);

TimeStamp.propTypes = {
    time: PropTypes.string.isRequired
};

TimeStamp.contextTypes = {
    t: PropTypes.func.isRequired
};

export default TimeStamp;
