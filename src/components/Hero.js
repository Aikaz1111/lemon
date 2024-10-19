function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className="hero__info">
                        <h1 className="hero__title">Little Lemon</h1>
                        <div className="hero__location">Chicago</div>
                        <p className="hero__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="#" className="hero__btn">Reserve a Table</a>
                    </div>
                    <img src="img/hero-img.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;