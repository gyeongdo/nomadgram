// import

import { actionCreators as userActions } from 'redux/modules/user';
// reducer action

const SET_FEED = "SET_FEED";

// reducer action Creator

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    }    
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

// initial
const initialState = {
}


// reducer
function reducer(state=initialState, action){
    switch(action.type){
    case SET_FEED:
        return applySetFeed(state, action);
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

// exports

const actionCreator = {
    getFeed
};

export { actionCreator};

// default reducer export

export default reducer;