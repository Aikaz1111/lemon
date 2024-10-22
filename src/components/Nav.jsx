import { Link } from 'react-router-dom';

function Nav({ isVisible }) {
    return (
        <nav className={`${isVisible ? 'visible' : 'hidden'}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <a href="#">Order online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;