import Testimonial from "./Testimonial";

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section__title">Testimonials</h2>
                <div className="testimonials__items flex">
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;