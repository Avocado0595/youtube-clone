import React from "react";
import "./ChannelOwner.css";

export default function ChannelOwner({video}) {
    return (<div className="channelOwner">
        {video?.displayName}
        <div className="channelOwner__subName">
            {video?.displayName}
        </div>
    </div>)
}