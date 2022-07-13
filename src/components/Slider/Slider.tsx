import "./index.scss";

const Slider = () => {
    return (
        <div className="slider">
            <h1 className="slider__title">The Power of Simplicity</h1>
            <p className="slider__description">Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
            <a className="slider__button" href="#">Learn</a>
            <ul className="slider__dots">
                <li className="slider__dot"></li>
                <li className="slider__dot"></li>
                <li className="slider__dot slider__dot--active"></li>
                <li className="slider__dot"></li>
                <li className="slider__dot"></li>
            </ul>
        </div>
    );
}

export { Slider };