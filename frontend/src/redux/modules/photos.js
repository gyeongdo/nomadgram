// import

import { actionCreators as userActions } from 'redux/modules/user';
// reducer action

const SET_FEED = "SET_FEED";
const ADD_COMMENT = "ADD_COMMENT";
const LIKE_PHOTO = "LIKE_PHOTOS";
const UNLIKE_PHOTO = "UNLIKE_PHOTOS";

// reducer action Creator

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    }    
}

function doLikePhoto(photoId){
    return {
        type: LIKE_PHOTO,
        photoId
    }
}

function doUnLikePhoto(photoId){
    return {
        type: UNLIKE_PHOTO,
        photoId
    }
}

function addComment(photoId, comment) {
    return {
        type: ADD_COMMENT,
        photoId,
        comment
    };
}



// api actions

function getFeed() {
    return (dispatch, getState) => {
      const { user: { token } } = getState();
      fetch("/images/", { headers: { Authorization: `JWT ${token}` } })
        .then(response => {
            if (response.status === 401){
                dispatch(userActions.logout());
            }
            return response.json();
        }) // json은 받아온 이미지 배열을 의미한다 0:
        .then(json => dispatch(setFeed(json)))
        .catch(err => console.log(err));
    };
}

//좋아요 
function likePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doLikePhoto(getState))
    // const {user: { token }} = getState();
    // fetch(`/${photoId}/likes/`, {
    //   headers: { Authorization: `JWT ${token}` }
    // })
    //   .then(response => {
    //     if (response.status === 401) {
    //       dispatch(userActions.logout());
    //     }
    //     return response.json();
    //   }) // json은 받아온 이미지 배열을 의미한다 0:
    //   .then(json => dispatch(setFeed(json)))
    //   .catch(err => console.log(err));
  };
}

//좋아요 
function unlikePhoto(photoId) {
    return (dispatch, getState) => {
        dispatch(doLikePhoto(getState))
        // const {user: { token }} = getState();
        // fetch(`/${photoId}/likes/`, {
        //   headers: { Authorization: `JWT ${token}` }
        // })
        //   .then(response => {
        //     if (response.status === 401) {
        //       dispatch(userActions.logout());
        //     }
        //     return response.json();
        //   }) // json은 받아온 이미지 배열을 의미한다 0:
        //   .then(json => dispatch(setFeed(json)))
        //   .catch(err => console.log(err));
    };
}

//댓글 쓰기 
function commentPhoto(photoId, message) {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/comments/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message
            })
        })
            .then(response => {
                if (response.status === 401) {
                    dispatch(userActions.logout());
                }
                return response.json();
            })
            .then(json => {
                if (json.message) {
                    dispatch(addComment(photoId, json));
                }
            });
    };
}



// initial
const initialState = {
}



// reducer
function reducer(state=initialState, action){
    switch(action.type){
    case SET_FEED:
        return applySetFeed(state, action);
    case LIKE_PHOTO:
        return applyLikePhoto(state, action);
    case ADD_COMMENT:
        return applyAddComment(state, action);
    default:
        return state;
    }
}

// reducer function

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applyLikePhoto(state, action) {
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

function applyAddComment(state, action) {
    const { photoId, comment } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return {
                ...photo,
                comments: [...photo.comments, comment]
            };
        }
        return photo;
    });
    return { ...state, feed: updatedFeed };
}

// exports
// action creators에는 함수이름을 써주는거임
const actionCreators = {
  getFeed,
  commentPhoto,
  likePhoto
};

export { actionCreators };

// default reducer export

export default reducer;