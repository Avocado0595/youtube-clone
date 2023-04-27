import React from "react";
import PropTypes from "prop-types";

import "./SignInButton.css"

export const SignInButton = (props) => {
  return (
    <div className="signInButton"
         {...props}
    >
      <img
        src="/images/user-icon.svg"
        alt="user-icon"
        className="signInButton--color"
      />
      <div className="signInButton--color"> sign in </div>
    </div>
  );
};

