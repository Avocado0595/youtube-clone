import "./Tools.css";

export default function Tools() {
    return (
        <div className="tools">
            <div className="tools__commentators">10N comments</div>
            <div className="tools__sort">
                <div className="tools__sort__icon">
                    <img src="/images/sort-icon.svg" alt="sort icon"/>
                </div>
                <div className="tools__sort__text">Sort by</div>
            </div>
        </div>
    );
};