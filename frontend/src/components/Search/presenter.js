import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import UserDisplay from "components/UserDisplay";
import PhotoDisplay from "components/PhotoDisplay";
import styles from "./styles.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Search = (props, context) => {
  return (
    <div className={cx("search")}>
      <div className={cx("section")}>
        <h4 className={cx("title")}>{context.t("Users")}</h4>
        {props.loading && <Loading />}
        {!props.loading &&
          props.userList.length < 1 && (
            <NotFound text={context.t("Nothing found :(")} />
          )}
        <div className={cx("content")}>
          {!props.loading &&
            props.userList.length > 0 && (
              <RenderUserSearch userList={props.userList} />
            )}
        </div>
      </div>
      <div className={cx("section")}>
        <h4 className={cx("title")}>{context.t("Photos")}</h4>
        {props.loading && <Loading />}
        {!props.loading &&
          props.imageList.length < 1 && (
            <NotFound text={context.t("Nothing found :(")} />
          )}
        <div className={cx("content")}>
          {!props.loading &&
            props.imageList.length > 0 && (
              <RenderImageSearch imageList={props.imageList} />
            )}
        </div>
      </div>
    </div>
  );
};

const RenderUserSearch = props =>
  props.userList.map(user => (
    <UserDisplay vertical={true} user={user} key={user.id} />
  ));

const RenderImageSearch = props =>
  props.imageList.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

const NotFound = props => <span className={cx("notFound")}>{props.text}</span>;

Search.contextTypes = {
  t: PropTypes.func.isRequired
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  imageList: PropTypes.array,
  userList: PropTypes.array
};

export default Search;
