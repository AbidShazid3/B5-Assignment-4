
import CTA from "./CTA/CTA";
import HomeBooks from "./HomeBooks/HomeBooks";
import PopularAuthor from "./PopularAuthor/PopularAuthor";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeBooks></HomeBooks>
            <PopularAuthor></PopularAuthor>
            <CTA></CTA>
        </div>
    );
};

export default Home;