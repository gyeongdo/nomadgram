import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from 'components/App/styles.scss';
import Footer from 'components/Footer';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import Auth from 'components/Auth';

const cx = classNames.bind(styles);

// stateless 컴포넌트라서 component 필요없음 임포트할때

const App = props => [
    props.isLoggedIn ? <PrivateRoute key={2}/> : <PublicRoute key={2}/>,
    <Footer key={3} />
]

App.proptype = {
  isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoute = props => (
    <Switch>
        <Route exact path="/" render={() => "feed"} />,
        <Route exact path="/explore" render={() => "explore"} />
    </Switch>    
)

const PublicRoute = props => (
    <Switch>
        <Route exact path="/" component={Auth}/>,
        <Route exact path="/forgot" render={() => "password"} />
    </Switch>
)

export default App;
