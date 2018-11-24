import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PhotoComments = props => (
  <div className={cx("comments")}>
    <ul className={cx("list")}>
        <Comment username={props.creater} comment={props.caption} />
        {props.comments.map(comment => (
            <Comment
                username={comment.creater.username}
                comment={comment.message}
                key={comment.id}
            />
        ))}
    </ul>
  </div>
);

const Comment = props => (
    <li className={cx("comment")}>
        <span className={cx("username")}>{props.username}</span>{" "}
        <span className={cx("message")}>{props.comment}</span>
    </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creater: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
        message       : PropTypes.string.isRequired,
        creater       : PropTypes.shape({
            profile_image : PropTypes.string,
            username      : PropTypes.string.isRequired
        }).isRequired
    })
  ).isRequired
};

export default PhotoComments;
