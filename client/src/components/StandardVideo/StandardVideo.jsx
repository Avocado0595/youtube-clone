import PropTypes from "prop-types";

import React from "react";
import {Link} from "react-router-dom";

import VerifyIcon from "../VerifyIcon/VerifyIcon";
import ChannelOwner from "../ChannelOwner/ChannelOwner";

import "./StandardVideo.css";


export default function StandardVideo({video}) {
    return (<Link to={`videos?id=${video?._id}`} className="video">
        <img src={`${video?.videoImgUrl}`} className="video__photo"/>
        <div className="video__info">
            <div className="">
                <img src={video?.avatar} className="video__info__avatar"/>
            </div>
            <div className="video__info__subInfo">
                <div className="video__info__subInfo__title">{video?.title}</div>
                <div className="video__info__subInfo__channel">
                    <ChannelOwner video={video}/>
                    {video.verify && <VerifyIcon/>}
                </div>

                <div className="video__info__subInfo__view-time">
                    <div>1.5k views</div>
                    <div>-</div>
                    <div>{video?.created}</div>
                </div>
            </div>
        </div>
    </Link>);
}

StandardVideo.propTypes = {
    video: PropTypes.object, displayVerifyIcon: PropTypes.func,
};
StandardVideo.defaultProps = {
    video: {}, displayVerifyIcon: () => {
    },
};
