import React, { Component } from 'react';
import Feed from './presenter';
import PropTypes from 'prop-types';

class Container extends Component{
    state = {
        loading:true
    };

    static propTypes = {
        getFeed:PropTypes.func.isRequired
    };

    componentDidMount() {
        const { getFeed } = this.props;
        if (!this.props.feed) {
            // 이 부분이 api를 요청하는거 비용이 들거임 
            getFeed();
        } else {
            this.setState({
                loading: false
            })
        }
    };

    componentWillReceiveProps = nextProps => {
        // this.props는 아직 props가 안담긴 상태이며
        // console.log(this.props);
        // nextProps는 props가 담긴 상태이다 
        // console.log(nextProps);

        if(nextProps.feed){
            this.setState({
                loading: false
            });
        }

    };

    render(){
        const { feed } = this.props;
        return <Feed {...this.state}  feed={feed} />
    }
}



export default Container;