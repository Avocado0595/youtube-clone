import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./MenuItem.css";

export default function MenuItem({ name, iconPath, path }) {
  return (
    <Link to={path} className="menuItem">
      <img src={`/images/${iconPath}`} alt="" className="menuItem__icon" />
      <div className="menuItem__name"> {name} </div>
    </Link>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  iconPath: PropTypes.string,
  path: PropTypes.string,
};

MenuItem.defaultProps = {
  name: "none",
  iconPath: "",
  path: "/",
};
