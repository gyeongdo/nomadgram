import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PhotoActions = (props, context) => (
  <div className={cx("actions")}>
  {/* 좋아요 아이콘 */}
    <div className={cx("icons")}>
      <span className={cx("icon")} onClick={props.handleHeartClick}>
        {props.isLiked ? 
        (
          <Ionicon icon="ios-heart" fontSize="28px" color="#EB4B59" />
        )
        :
        (
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
        )}
      </span>
      <span className={cx("icon")}>
        <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
      </span>
    </div>
    <span className={cx("likes")} onClick={props.openLikes}>
      {props.number}{" "}
      {/* 단수 복수 처리 */}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

export default PhotoActions;
