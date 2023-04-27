import "./EmotionButton.css";

export default function EmotionButton() {
    return (
        <div className="emotionButton">
            <div className="emotionButton__like">
                <div className="emotionButton__like__icon">
                    <img src="/images/like-icon.svg" alt="like icon"/>
                </div>
                <div className="emotionButton__like__likers">10N</div>
            </div>
            <div className="emotionButton__dislike">
                <div className="emotionButton__dislike__icon">
                    <img src="/images/dislike-icon.svg" alt="dislike icon"/>
                </div>
            </div>
        </div>
    );
};