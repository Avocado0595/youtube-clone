import {Outlet} from "react-router-dom";
import React from "react";


import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import UserAuthenticationFeature from "../../features/authentication";

import "./MainLayout.css";


export default function MainLayout() {
    const {authenticationWithGoogle} = UserAuthenticationFeature();
    return (
        <>
            <Header authenticationWithGoogle={authenticationWithGoogle}/>
            <div className="mainLayout">
                <Menu/>
                <div className="menu__wall"></div>
                <Outlet/>
            </div>
        </>
    );
}
