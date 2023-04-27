import SubscriptionButton from "../../../components/SubscribeButton/SubscriptionButton";

import "./Channel.css";

export default function Channel() {
    return (
        <div className="channel">
            <div className="channel__avatar">
                <img
                    src="https://i.pinimg.com/736x/10/21/ae/1021ae33a4210dbf636e3973f966476d.jpg"
                    alt=""
                />
            </div>
            <div className="channel__info">
                <div className="channel__info__name">name</div>
                <div className="channel__info__subscribers">subscribers</div>
            </div>
            <SubscriptionButton/>
        </div>
    );
};