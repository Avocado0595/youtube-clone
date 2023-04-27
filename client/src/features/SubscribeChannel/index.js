import {useDispatch, useSelector} from "react-redux";

import {subscribeChannelRequest, subscribeChannelSelector} from "./subscribeChannelSlice";

export default function SubscribeChannelFeature() {
    const dispatch = useDispatch();

    const subscribeChannelState = useSelector(subscribeChannelSelector);
    const subscribeChannel = (channelId) => {
        dispatch(subscribeChannelRequest(channelId));
    }

    return [
        subscribeChannel,
        subscribeChannelState
    ]
}