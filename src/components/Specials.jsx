import Card from "./card";

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="specials__info">
                    <h2 className="section__title">Specials</h2>
                    <a href="#" className="btn">Online Menu</a>
                </div>
                <div className="specials__items">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </section>
    );
}

export default Specials;