import { connect } from 'react-redux';
import Container from './container';
import { actionCreator as photoActions } from 'redux/modules/photos';


const mapStateToProps = (state, ownProps) => {
    //여기는 콘솔에서 next state 에서 state.photos.feed
    const { photos: { feed } } = state;
    return { feed };
    };

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);