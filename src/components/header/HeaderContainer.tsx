import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";

 type MapDispatchAuth = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
export type HeaderProps = AuthUserData & MapDispatchAuth
class HeaderContainer extends React.Component<HeaderProps>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }
    render() {
        return <Header {...this.props}/>

    }
}

let mapStateToProps = (state:AppRootState):AuthUserData => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,

    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)