import React from "react";
import {createBrowserRouter} from "react-router-dom";


import MainLayout from "../layouts/MainLayout/MainLayout";
import WatchVideoLayout from "../layouts/WatchVideoLayout";
import UnAvailablePage from "../components/UnAvailablePage/UnavailablePage";
import WatchVideo from "../pages/watchVideo/WatchVideo";
import Home from "../pages/home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            // home
            {
                path: "",
                element: <Home/>
            },

            // short video
            {
                path: "short",
                element: <div> short video </div>,
            },

            // hashtag

            // {
            //     path: "hashtag/:hashTagName",
            //     element: <HashTag/>,
            // },
        ],
    },
    {
        path: "/videos",
        element: <WatchVideoLayout/>,
        children :[{
            path: "",
            element: <WatchVideo/>
        }]
    },
    {
        path: "*",
        element: <UnAvailablePage/>,
    },
]);
