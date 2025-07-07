import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImg1 from "@/assets/1.png";
import sliderImg2 from "@/assets//2.jpg";
import sliderImg3 from "@/assets/3.jpg";
import sliderImg4 from "@/assets/4.jpg";
import sliderImg5 from "@/assets/5.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderItem from './SliderItem';

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem image={sliderImg1} text="Explore Thousands of Books Effortlessly" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem image={sliderImg2} text="Smart Borrowing & Return Made Simple" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem image={sliderImg3} text="Track Your Reading History with Ease" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem image={sliderImg4} text="Organize Your Library Digitally" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem image={sliderImg5} text="Empower Your Learning with Smart Library Access" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;