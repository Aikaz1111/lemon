import Testimonial from "./Testimonial";

function Testimonials() {
    return (
        <section className="testimonials" aria-labelledby="testimonials-title">
            <div className="container">
                <h2 className="section__title" id="testimonials-title">Testimonials</h2>
                <div className="testimonials__items flex" role="list">
                    <Testimonial role="listitem"></Testimonial>
                    <Testimonial role="listitem"></Testimonial>
                    <Testimonial role="listitem"></Testimonial>
                    <Testimonial role="listitem"></Testimonial>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;