import  React,{ useState } from "react";

export default function useSideBar() {
    const [items, setItems] = useState({
        home: [
            {
                name: "home",
                iconPath: "home-icon.svg",
                path: "/",
            },
            {
                name: "short",
                iconPath: "shortVideo-icon.svg",
                path: "/short",
            },

            {
                name: "subscription",
                iconPath: "subscription-icon.svg",
                path: "/subscription",
            },
        ],
        videoMode: [
            {
                name: "library",
                iconPath: "library-icon.svg",
            },
            {
                name: "history",
                iconPath: "history-icon.svg",
            },
        ],
        subscribedChannel: [{}],
        explore: [
            {
                title: "explore",
            },
            {
                name: "popular",
                iconPath: "popular-icon.svg",
            },

            { name: "music", iconPath: "music-icon.svg" },

            { name: "game", iconPath: "youtubeGaming-icon.svg" },

            { name: "news", iconPath: "news-icon.svg" },

            { name: "sport", iconPath: "sport-icon.svg" },
        ],
        services: [
            { title: "more from youtube" },
            { name: "youtube music", iconPath: "youtubeMusic-icon.svg" },

            { name: "youtube kids", iconPath: "youtubeKids-icon.svg" },
            { name: "youtube tv", iconPath: "youtubeTv-icon.svg" },
        ],
        support: [
            { name: "setting", iconPath: "setting-icon.svg" },
            { name: "report history", iconPath: "report-icon.svg" },
            { name: "help", iconPath: "help-icon.svg" },
            { name: "send feedback", iconPath: "feedback-icon.svg" },
        ],
    });

    return { items };
}
