import "./ShareButton.css";

export default function ShareButton() {
    return (
        <div className="shareButton">
            <div className="shareButton__icon">
                <img src="/images/share-icon.svg" alt="share icon"/>
            </div>
            <div className="shareButton__text">Share</div>
        </div>
    );
};