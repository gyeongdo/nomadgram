// imports

import { actionCreators as userActions } from "redux/modules/user";

// actions

const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";

// action creators

function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    };
}

function doLikePhoto(photoId) {
    return {
        type: LIKE_PHOTO,
        photoId
    };
}

function doUnlikePhoto(photoId) {
    return {
        type: UNLIKE_PHOTO,
        photoId
    };
}

function addComment(photoId, comment) {
    return {
        type: ADD_COMMENT, 
        photoId,
        comment
    };
}

// API Actions

function getFeed() {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch("/images/", {
            headers: {
                Authorization: `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => {
            dispatch(setFeed(json));
        });
    };
}

function likePhoto(photoId) {
    return (dispatch, getState) => {
        dispatch(doLikePhoto(photoId));
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/likes/`, {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(userActions.logout());
            } else if (!response.ok) {
                dispatch(doUnlikePhoto(photoId));
            }
        });
    };
}

function unlikePhoto(photoId) {
    return (dispatch, getState) => {
        dispatch(doUnlikePhoto(photoId));
        const { user: { token } } = getState();
        fetch(`/images/${photoId}/unlikes/`, {
            method: "DELETE",
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(userActions.logout());
            } else if (!response.ok) {
                dispatch(doLikePhoto(photoId));
            }
        });
    };
}

// index에서 dispatch로 함수를 호출해서 보내줬음 
// 여기서 받아서 사용 
// actioncreator에서 이쪽으로 보내줌 

function commentPhoto(photoId, message) {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        console.log(JSON.stringify(getState));
        fetch(`/images/${photoId}/comments/`, {
          method: "POST",
          headers: {
            Authorization: `JWT ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: message
          })
        }).then(response => {
            if (response === 401) {
              dispatch(userActions.logout);
            }
            return response.json();
        }).then(json => {
            if (json.message){
                dispatch(addComment(photoId, json));
            }
        });
    };
}
// Initial State

const initialState = {};

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_FEED:
        return applySetFeed(state, action);
      case LIKE_PHOTO:
        return applyLikePhoto(state, action);
      case UNLIKE_PHOTO:
        return applyUnlikePhoto(state, action);
      case ADD_COMMENT:
        return applyAddComment(state, action);
      default:
        return state;
    }
}

// Reducer Functions

function applySetFeed(state, action) {
    const { feed } = action;
    return {
        ...state,
        feed
    };
}

function applyLikePhoto(state, action) {
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return { ...photo, is_liked: true, like_count: photo.like_count + 1 };
        }
        return photo;
    });
    return { ...state, feed: updatedFeed };
}

function applyUnlikePhoto(state, action) {
    const { photoId } = action;
    const { feed } = state;
    const updatedFeed = feed.map(photo => {
        if (photo.id === photoId) {
            return {
                ...photo,
                is_liked: false,
                like_count: photo.like_count - 1
            };
        }
        return photo;
    });
    return {
        ...state,
        feed: updatedFeed
    };
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
// Exports

const actionCreators = {
  getFeed,
  likePhoto,
  unlikePhoto,
  commentPhoto
};

export { actionCreators };

// Export reducer by default

export default reducer;
