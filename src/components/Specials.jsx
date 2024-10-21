import Card from "./Card";
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="specials__info flex">
                    <h2 className="section__title">Specials</h2>
                    <a href="#" className="btn btn_green">Online Menu</a>
                </div>
                <div className="specials__items flex">
                    <Card img={dish1}></Card>
                    <Card img={dish2}></Card>
                    <Card img={dish3}></Card>
                </div>
            </div>
        </section>
    );
}

export default Specials;