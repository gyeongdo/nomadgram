import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import "./styles.scss";
import Auth from 'components/Auth';
import Footer from 'components/Footer';
import Navigation from "components/Navigation";
import Feed from "components/Feed";
// import styles from "components/App/styles.scss";
// import classNames from "classnames/bind";
// const cx = classNames.bind(styles);

// stateless 컴포넌트라서 component 필요없음 임포트할때

const App = props => [
  props.isLoggedIn ? <Navigation key={1} /> : null,
  props.isLoggedIn ? <PrivateRoute key={2} /> : <PublicRoute key={2} />,
  <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/explore" render={() => "explore"} />
    </Switch>
);

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth}/>,
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;
