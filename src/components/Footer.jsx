// import logo2 from "./assets/logo2.png";
import Nav from "./Nav.js";

function Footer() {
    return (
        <footer role="contentinfo">
            <div className="container">
                <div className="footer__content flex">
                    <img src="" alt="Restaurant Logo" />
                    <div className="footer__col">
                        <div className="footer__title">Menu</div>
                        <Nav></Nav>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Contact</div>
                        <p>
                        Adress <br />
                        phone number <br />
                        email
                        </p>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title">Social Media Links</div>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;