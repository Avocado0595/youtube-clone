import React from "react";
import { Link } from "react-router-dom";


import "./UnavailablePage.css";

export default function UnAvailablePage() {
  return (
    <div className="unavailablePage">
      <div className="unavailablePage__top">
        <img src="/images/error-icon.svg" />
        <div>Page not found , please check and try again </div>
      </div>

      <Link to={"/"} className="unavailablePage__bottom">
        Back Home
      </Link>
    </div>
  );
}
