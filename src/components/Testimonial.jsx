import TestimonialImg from '../assets/testimonial.webp';

function Testimonial() {
    return(
        <div className="testimonial" role="article">
            <div className="testimonial__rating" aria-label="Rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div className="testimonial__photo">
                <img src={TestimonialImg} alt="" />
            </div>
            <div className="testimonial__name">Name</div>
            <p className="testimonial__text">
                Review rext
            </p>
        </div>
    );
}

export default Testimonial;