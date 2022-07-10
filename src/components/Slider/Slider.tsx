import "./index.scss";

function Slider() {
    return (
        <div className="slider">
            <h1 className="slider__title">The Power of Simplicity</h1>
            <p className="slider__description">Instead of spending time searching for the right app, our AI will bring the right app to you.</p>
            <a className="slider__button" href="#">Learn</a>
            <div className="slider__dots">
                <button className="slider__dot"></button>
                <button className="slider__dot"></button>
                <button className="slider__dot slider__dot--active"></button>
                <button className="slider__dot"></button>
                <button className="slider__dot"></button>
            </div>
        </div>
    );
}

export { Slider };