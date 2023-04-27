import {useState} from "react";


import VideoCategory from "../../components/VideoCategory/VideoCategory";
import LoadingCategory from "../../components/LoadingCategory/LoadingCategory";
import StandardVideo from "../../components/StandardVideo/StandardVideo";

import VideoFilterByCategoryFeature from "../../features/filterVideo";

export default function useHome() {
    const [{clickCategory, activeCategory}, filterVideoState] = VideoFilterByCategoryFeature();
    const {videos, loading, error} = filterVideoState;

    const [categories, setCategories] = useState(["all", "music", "gaming", "live stream", "hardware", "software"]);

    const displayCategories = () => {
        return categories.map((categoryName) =>
            <VideoCategory
                key={categoryName}
                name={categoryName}
                onClick={() => clickCategory(categoryName)}
                style={activeCategory(categoryName)}
            />
        )
    };

    const displayVideos = () => {
        return videos.length < 1 ? "there aren't any video" : videos.map((video) => <StandardVideo
            key={video._id}
            video={video}
        />)
    }

    const displayLoadingCategory = () => (loading ? <LoadingCategory/> : "");

    const displayError = () => (error ? <div> error </div> : "");

    return {
        displayCategories, displayVideos, displayLoadingCategory, displayError,
    };
}
