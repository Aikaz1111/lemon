import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function HomePage() {
    return (
        <main>
            <Hero></Hero>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <About></About>
        </main>
    );
}

export default HomePage;