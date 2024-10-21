import RestaurantImg from "../assets/restaurant.jpg";

function Hero() {
    return (
        <section className="hero" aria-labelledby="hero-title" role="region">
            <div className="container">
                <div className="hero__content flex">
                    <div className="hero__info">
                        <h1 className="hero__title">Little Lemon</h1>
                        <div className="hero__location">Chicago</div>
                        <p className="hero__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#" className="btn btn_yellow" aria-label="Reserve a Table">Reserve a Table</a>
                    </div>
                    <div className="hero__img">
                        <img src={RestaurantImg} alt="Interior view of Little Lemon restaurant" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;