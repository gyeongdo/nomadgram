import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CommentBox = (props, context) => (
  <form className={cx("commentBox")}>
    <Textarea
      className={cx("input")}
      placeholder={context.t("Add a comment...")}
      onChange={props.handleInputChange}
      value={props.comment}
      onKeyPress={props.handleKeyPress}
    />
  </form>
);

CommentBox.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired
};

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

export default CommentBox;
