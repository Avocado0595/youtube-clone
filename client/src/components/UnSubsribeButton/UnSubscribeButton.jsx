import "./UnsubscribeButton.css";

export default function UnSubscribeButton() {
    return (
        <div className="subscribed">
            <img src="/images/ring-icon.svg" alt="ring icon" className="subscribed__ringIcon"/>
            <div className="subscribed__text">Subscribed</div>
            <img src="/images/arrow-right-icon.svg" alt="arrow down" className="subscribed__optionIcon"/>


            <div className="subscribed__options">
                <div className="subscribed__options__receiveAllNof">
                    <img src="/images/ring-icon.svg" alt="ring icon"
                         className="subscribed__options__receiveAllNof__ringIcon"/>
                    All
                </div>
            </div>

        </div>
    )
}