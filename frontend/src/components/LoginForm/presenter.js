import React from "react";
import formStyles from "shared/formStyles.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import classNames from "classnames/bind";

const cx = classNames.bind(formStyles);

const LoginForm = (props,context) => (
  <div className={cx("formComponent")}>
    <form
        className={cx("form")}
        onSubmit={props.handleSubmit}
        method="post"
    >
        <input
            type="text"
            placeholder={context.t("Username")}
            className={cx("textInput")}
            value={props.usernameValue}
            onChange={props.handleInputChange}
            name="username"
        />
        <input
            type="password"
            placeholder={context.t("Password")}
            className={cx('textInput')}
            onChange={props.handleInputChange}
            name="password"
            value={props.passwordValue}
        />
        <input
            type="submit"
            value={context.t("Log in")}
            className={cx('button')}
        />
    </form>
    <span className={cx('divider')}>or</span>
        <FacebookLogin
            appId="256404181667666"
            autoLoad={true}
            fields="name, email, picture"
            callback={props.handleFacebookLogin}
            cssClass={cx('facebookLink')}
            icon="fa-facebook-official"
            textButton="페이스북으로 로그인"
        />
    <span>Forgot password?</span>
  </div>
);

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
    t: PropTypes.func.isRequired
};

export default LoginForm;