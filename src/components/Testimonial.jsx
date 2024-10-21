function Testimonial() {
    return(
        <div className="testimonial" role="article">
            <div className="testimonial__rating" aria-label="Rating"></div>
            <div className="testimonial__photo">
                <img src="#" alt="" />
            </div>
            <div className="testimonial__name">Name</div>
            <p className="testimonial__text">
                Review rext
            </p>
        </div>
    );
}

export default Testimonial;