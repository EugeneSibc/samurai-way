import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthUserData, authUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppRootState} from "../../redux/redux-store";

 type MapDispatchAuth = {
    setAuthUserData: (id: number, email: string, login: string) => void
    authUserData: () => void
}
export type HeaderProps = AuthUserData & MapDispatchAuth
class HeaderContainer extends React.Component<HeaderProps>{
    componentDidMount() {
        this.props.authUserData()
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

export default connect(mapStateToProps, {setAuthUserData, authUserData})(HeaderContainer)