import VerifyIcon from "../../../components/VerifyIcon/VerifyIcon";
import "./RecommendedVideo.css";

export default function RecommendedVideo() {
    return (
        <div className="videoRecommended">
            <div className="videoRecommended__thumbnail">
                <img
                    src="https://i.pinimg.com/564x/9b/8e/5f/9b8e5f613919c8e67770dfce7504352a.jpg"
                    alt=""
                />
            </div>
            <div className="videoRecommended__info">
                <div className="videoRecommended__info__title">
                    Thuong huyen nhat : hoi tho mat trang
                </div>
                <div className="videoRecommended__info__channel">
                    <div className="videoRecommended__info__channel__text">
                        conmeomaunau
                    </div>
                    <VerifyIcon/>
                </div>
                <div className="videoRecommended__info__bottom">
                    <div className="videoRecommended__info__bottom__views">10N views</div>
                    <div className="videoRecommended__info__bottom__time">
                        time passed
                    </div>
                </div>
            </div>
        </div>
    );
};