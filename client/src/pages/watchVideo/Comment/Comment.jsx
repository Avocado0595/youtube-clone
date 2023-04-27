import "./Comment.css";

export default function Comment() {
    return (
        <div className="comment">
            <div className="comment__avatar">
                <img
                    src="https://i.pinimg.com/564x/e3/92/f9/e392f99d7d8c19e6f1f5812e2f853a12.jpg"
                    alt=""
                />
            </div>
            <div className="comment__content">
                <div className="comment__content__top">
                    <div className="comment__content__name">conmeomaunau</div>
                    <div className="comment__content__time">just now</div>
                </div>
                <div className="comment__content__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                    animi aperiam asperiores assumenda eius est maxime, nisi, nulla
                    perferendis, praesentium quisquam sed? Odio quam qui reiciendis
                    reprehenderit suscipit, voluptate voluptatem. loremLorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Autem culpa dignissimos
                    dolorem harum
                </div>
                <div className="comment__interactComment">
                    <div className="comment__interactComment__like">
                        <img src="/images/like-icon.svg" alt="like icon"/>
                        <div className="comment__interactComment__like__likers"> 10</div>
                    </div>
                    <div className="comment__interactComment__dislike">
                        <img src="/images/dislike-icon.svg" alt="dislike icon"/>
                    </div>
                    <div className="comment__interactComment__reply">Reply</div>
                </div>
                <div className="comment__content__replies">
                    <img
                        src="/images/arrow-right-icon.svg"
                        alt="arrow"
                        className="comment__content__replies__icon"
                    />
                    <div className="comment__content__replies__text">10 replies</div>
                </div>
            </div>
        </div>
    );
};