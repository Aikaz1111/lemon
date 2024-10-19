import logo from '../assets/Logo.svg'

function Header() {
    return (
        <header>
            <a href="#">
                <img src={logo} alt="" />
            </a>
            <Nav></Nav>
        </header>
    );
}

export default Header;