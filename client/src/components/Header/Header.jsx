import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import {SignInButton} from "../SignInButton/SignInButton";

import "./Header.css";

export default function Header({authenticationWithGoogle}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject)
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <div className="header__left__menu">
            <img
              src="images/menu-icon.svg"
              alt="menu-icon"
              className="header__left__menu-icon"
            />
          </div>
          <Link to="/">
            <img
              src="/images/youtube-logo.png"
              alt="logo-icon"
              className="header__left__logo"
            />
          </Link>
        </div>

        <div className="header__centre">
          <form className="header__centre__search">
            <input type="text" placeholder="Search" />
            <button className="header__center__search-button">
              <img src="/images/search-icon.svg" alt="search-icon" />
            </button>
          </form>
        </div>

        <div className="header__right">
          <div className="header__right__more">
            <img
              src="/images/straight-more-icon.svg"
              alt="straightMore-icon"
              className="header__right__more-icon"
            />
          </div>

          <SignInButton onClick={authenticationWithGoogle} />
          <h1>{user?.displayName}</h1>
        </div>
      </div>
      {/*   use display: fixed so this element use to normal display */}
      <div className="header__wall"></div>
    </div>
  );
}


Header.propTypes = {
  authenticationWithGoogle : PropTypes.func
}

Header.defaultProps = {
  authenticationWithGoogle : () => {}
}