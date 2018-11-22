import React from 'react';
import styles from './styles.scss';
import classNames from "classnames/bind";
import Ionicon from 'react-ionicons';

const cx = classNames.bind(styles);

export const LoginForm = props => (
    <div>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
        </form>
        <span>or</span>
        <span>
            <Ionicon icon="logo-facebook" fonSize="20px" color="#385185" />
            Log in with Facebook
        </span>
        <span>Forgot password?</span>
    </div>
);


export const SignupForm = props => <div>
           <h3>Sign up to see photos and videos from your friends.</h3>
            <button className={cx('blueButton')}>
             {" "}
             <Ionicon icon="logo-facebook" fonSize="20px" color="white" />
             Login with Facebook
           </button>
           <span>or</span>
           <form>
             <input type="email" placeholder="Email" />
             <input type="Full name" placeholder="Full name" />
             <input type="Username" placeholder="Username" />
             <input type="Password" placeholder="Password" />
             <input type="submit" value="Siup up" />
           </form>
           <p>
             By signing up, you agree to our <span>
               Terms & Privacy Policy
             </span>.
           </p>
         </div>;