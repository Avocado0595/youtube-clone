import useHome from "./useHome";

import "./Home.css";

export default function Home() {
    const {
        displayCategories,
        displayVideos,
        displayError,
        displayLoadingCategory
    } = useHome();
    displayError();

    return (
        <div className="home">
            <div className="home__categories">
                {displayCategories()}
            </div>
            <div className="home__rowWall"></div>
            <div className="home__videos">{displayVideos()}</div>
            {displayLoadingCategory()}
        </div>
    );
}
