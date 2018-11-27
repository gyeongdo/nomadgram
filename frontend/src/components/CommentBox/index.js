import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitComment: comment => {
      dispatch(photoActions.commentPhoto(ownProps.photoId, comment));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
