import {configureStore} from "@reduxjs/toolkit";

import videoFilterSlice from "../features/filterVideo/slice";
import subscribeChannelSlice from "../features/SubscribeChannel/subscribeChannelSlice";


const reducer = {
    videoFilter: videoFilterSlice,
    subscribeChannel: subscribeChannelSlice
};

const store = configureStore({reducer});

export default store;
