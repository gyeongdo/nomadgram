import React, { Component } from "react";
import Auth from "./presenter";


//클래스로 만드는 이유는 state가 있는 컴포넌트라는 뜻이지
class Container extends Component {
    //state 디폴트 값을 로그인을 정해줌
    state = {
        action: "login"
    };
    render() {
        const { action } = this.state;
        return <Auth action={action} changeAction={this._changeAction} />;
    }
    
    // 자바스크립트 함수
    _changeAction = () => {
        this.setState(prevState => {
            const { action } = prevState;
            if (action === "login") {
                return {
                    action: "signup"
                };
            } else if (action === "signup") {
                return {
                    action: "login"
                };
            }
        });
    };
}

export default Container;