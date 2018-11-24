import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import classNames from "classnames/bind";

import PhotoActions from 'components/PhotoActions';
import PhotoComments from "../PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const cx = classNames.bind(styles);

const FeedPhoto = (props, context) => {
  return <div className={cx("feedPhoto")}>
      <header className={cx("header")}>
        <img src={props.creater.profile_image || require("images/noPhoto.jpg")} alt={props.creater.username} className={cx("image")} />
        <div className={cx("headerColumn")}>
          <span className={cx("creater")}>{props.creater.username}</span>
          <span className={cx("location")}>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.caption} />
      <div className={cx("meta")}>
        <PhotoActions number={props.like_count} isLiked={props.is_liked} photoId={props.id} openLikes={props.openLikes} />
        <PhotoComments caption={props.caption} creater={props.creater.username} comments={props.comments} />
        <TimeStamp time={props.natural_time} />
        <CommentBox photoId={props.id} />
      </div>
    </div>;
};

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
  id: PropTypes.number.isRequired,
  creater: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      creater: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  seeingLikes: PropTypes.bool.isRequired,
  openLikes: PropTypes.func.isRequired,
  closeLikes: PropTypes.func.isRequired
};

export default FeedPhoto;
