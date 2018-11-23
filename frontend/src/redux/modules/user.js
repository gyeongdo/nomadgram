

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
// action creators

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    };
}

function logout(){
    return {
        type:LOGOUT
    }
}


// initial state
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") || false,
    token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        default:
            return state;
    }
}


function usernameLogin(username, password) {
    return dispatch => {
        fetch("/rest-auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    };
}

function createAccount(username, password, email, name){
    return function(dispatch){
        fetch("/rest-auth/registration/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1 : password,
                password2 : password,
                email,
                name
            }) 
        })
        .then(response => response.json())
            .then(json => {
                if (json.token) {
                    dispatch(saveToken(json.token));
                }
        })
        .catch(err => console.log(err));
    }
}


function applySetToken(state, action) {
    const { token } = action;
    localStorage.setItem("jwt", token);
    return {
        ...state,
        isLoggedIn: true,
        token: token
    };
};

// 토큰이 없던 상태로 만들어줘서 초기화면을 보여주는거임 
// 상태를 초기로 바꾸주는거 별다른 로직이 있는게 아니라 
function applyLogout(state, action) {
    localStorage.removeItem("jwt");
    return {
        isLoggedIn: false
    };
};

function facebookLogin(access_token) {
  return dispatch => null;
};


const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout
};

export { actionCreators };

export default reducer;