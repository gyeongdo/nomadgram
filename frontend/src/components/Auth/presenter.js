import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const cx = classNames.bind(styles);

const Auth = (props, context) => (
  <main className={cx("auth")}>
    <div className={cx("column")}>
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className={cx("column")}>
      <div className={cx("whiteBox formBox")}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>

      {/* 로그인폼
          로그인폼을 다른 폴더에서 불러옴     
      */}
      <div className={cx("whiteBox")}>
        {props.action === "signup" && (
          <p className={cx("text")}>
            Have an account?{" "}
            <span className={cx("changeLink")} onClick={props.changeAction}>
              {context.t("Log in")}
            </span>
          </p>
        )}
        {props.action === "login" && (
          <p className={cx("text")}>
            {context.t("Don't have an account?")}{" "}
            <span className={cx("changeLink")} onClick={props.changeAction}>
              {context.t("Sign up")}
            </span>
          </p>
        )}
      </div>
      {/* 로그인폼 */}

      <div className={cx("appBox")}>
        <span>{context.t("Get the app")}</span>
        <div className={cx("appstores")}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Auth;
