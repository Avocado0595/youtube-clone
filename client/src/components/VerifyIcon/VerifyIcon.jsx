import PropTypes from "prop-types";
import "./VerifyIcon.css";

export default function VerifyIcon(props) {
    return (
        <div className="verify">
            <img
                src="/images/verify-icon.svg"
                alt="verify-icon"
                className="verify__icon"
                {...props}
            />
            <div className="verify__description">verified</div>
        </div>
    );
}

VerifyIcon.propTypes = {
    style: PropTypes.object,
};

VerifyIcon.defaultProps = {
    style: {width: "1.4rem"},
}
