import FooterLogo from '../assets/FooterLogo.svg';
import Nav from "./Nav";

function Footer() {
    return (
        <footer role="contentinfo">
            <div className="container">
                <div className="footer__content flex">
                    <img src={FooterLogo} className='footer__logo' alt="Restaurant Logo" />
                    <div className="footer__col">
                        <div className="footer__title">Menu</div>
                        <Nav></Nav>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Contact</div>
                        <p>
                            Chicago, 256 Main St. <br />
                            (123) 4567 89 10 <br />
                            little-lemon@gmail.com
                        </p>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Social Media Links</div>
                        <ul>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;