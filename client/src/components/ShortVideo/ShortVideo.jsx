import React from "react";

import PropTypes from "prop-types";

export default function ShortVideo(shortVideo) {
  return (
    <div className="shortVideo">
      <img
        src="https://genk.mediacdn.vn/139269124445442048/2020/5/4/photo-1-1588541968324891829550.jpg"
        alt=""
        className="shortVideo__photo"
      />
      <div className="shortVideo__views">100 N views </div>
    </div>
  );
}

ShortVideo.propTypes = {
  shortVideo: PropTypes.object,
};

ShortVideo.defaultProps = {
  shortVideo: {},
};
