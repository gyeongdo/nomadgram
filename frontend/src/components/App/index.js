// 컴포넌트를 리덕스 스토어에 연결
import { connect } from 'react-redux';
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        // 스토어 안에 있는 값을 얻으려고 
        isLoggedIn: user.isLoggedIn
    }
}

export default connect(mapStateToProps)(Container);