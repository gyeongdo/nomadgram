import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "components/Loading";
import Ionicon from "react-ionicons";
import UserDisplay from "components/UserDisplay";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserList = props => (
  <div className={cx("container1")}>
    <div className={cx("box")}>
      <header className={cx("header")}>
        <h4 className={cx("title")}>{props.title}</h4>
        <span onClick={props.closeLikes}>
          <Ionicon icon="md-close" fontSize="20px" color="black" />
        </span>
      </header>
      <div className={cx("content")}>
        {props.loading ? <Loading /> : <RenderUsers list={props.userList} />}
      </div>
    </div>
  </div>
);

const RenderUsers = props =>
  props.list.map(user => (
    <UserDisplay horizontal={true} user={user} key={user.id} />
  ));

RenderUsers.propTypes = {
  list: PropTypes.array
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired,
  userList: PropTypes.array
};

export default UserList;
