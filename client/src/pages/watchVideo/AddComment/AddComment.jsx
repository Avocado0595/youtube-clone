import "./AddComment.css";

export default function AddComment() {
    return (
        <div className="addComment">
            <div className="addComment__avatar">
                <img
                    src="https://i.pinimg.com/564x/d4/80/75/d48075a611bf2646f54adfec969d2720.jpg"
                    alt=""
                />
            </div>
            <div className="addComment__form">
                <form className="addComment__form__content">
                    <input type="text" placeholder="Add a public comment..."/>
                </form>

                <div className="addComment__form__buttons">
                    <div className="addComment__form__buttons__cancelButton">Cancel</div>
                    <div className="addComment__form__buttons__commentButton">
                        Comment
                    </div>
                </div>
            </div>
        </div>
    );
};