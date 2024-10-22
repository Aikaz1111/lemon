import AboutImg1 from '../assets/about-img1.jpg';
import AboutImg2 from '../assets/about-img2.jpg';

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__content flex">
                    <div className="about__info">
                        <h2 className="section__title">Little Lemon</h2>
                        <div className="about__location">Chicago</div>
                        <p className="about__description">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p className="about__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                        </p>
                    </div>
                    <div className="about__images flex">
                        <img src={AboutImg1} alt="" />
                        <img src={AboutImg2} alt="" />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default About;