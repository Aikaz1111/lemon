import logo from '../assets/Logo.svg';
import Nav from "./Nav";

function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__content flex">
                    <a href="#" className='header__logo'>
                        <img src={logo} alt="" />
                    </a>
                    <Nav></Nav>
                </div>
            </div>
        </header>
    );
}

export default Header;