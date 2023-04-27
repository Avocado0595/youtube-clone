import PropTypes from "prop-types";

import React from "react";

import "./VideoCategory.css";

export default function VideoCategory(props) {
    const {name} = props;
    return (
        <div
            className="videoCategory"
            {...props}
        >
            {name}
        </div>
    );
}


VideoCategory.propTypes = {
    name: PropTypes.string,
};

VideoCategory.defaultProps = {
    name: "none",
};
