function Card() {
    return (
        <div className="card">
            <img src="#" alt="" />
            <div className="card__info">
                <h3 className="card__title">Title</h3>
                <div className="card__price">$12.99</div>
                <p className="card__description">
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="#"  className="card__delivery">Order a delivery</a>
            </div>
        </div>
    );
}

export default Card;