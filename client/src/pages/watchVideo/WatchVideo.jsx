import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Categories from "./Categories/Categories";
import EmotionButton from "./EmotionButton/EmotionButton";
import ShareButton from "./ShareButton/ShareButton";
import OptionButton from "./OptionButton/OptionButton";
import Channel from "./Channel/Channel";
import Description from "./Description/Description";
import Tools from "./Tools/Tools";
import AddComment from "./AddComment/AddComment";
import Comments from "./Comments/Comments";
import RecommendedVideos from "./RecommendedVideos/RecommendedVideos";

import "./WatchVideo.css";
import UnSubscribeButton from "../../components/UnSubsribeButton/UnSubscribeButton";


export default function WatchVideo() {
    return (
        <div className="watchVideo">
            <div className="watchVideo__videoInfo">
                <PlayVideo/>
                <div className="watchVideo__videoInfo__title"> title</div>
                <div className="watchVideo__videoInfo__interactVideo">
                    <Channel/>
                    <EmotionButton/>
                    <UnSubscribeButton/>
                    <ShareButton/>
                    <OptionButton/>
                </div>
                <Description/>
                <Tools/>
                <AddComment/>
                <Comments/>
            </div>

            <div className="watchVideo__recommends">
                <Categories/>
                <RecommendedVideos/>
            </div>
        </div>
    );
}
