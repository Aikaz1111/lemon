import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
    return (
        <div className="card" role="group">
            <img src={props.img} className="card__img" alt="Image of the dish" />
            <div className="card__info flex">
                <h3 className="card__title">Title</h3>
                <div className="card__price">$12.99</div>
                <p className="card__description">
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
                </p>
                <a href="#"  className="card__delivery" aria-label="Order a delivery">Order a delivery <i className="fas fa-truck"></i></a>
            </div>
        </div>
    );
}

export default Card;