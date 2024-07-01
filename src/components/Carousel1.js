import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "1 Series",
    image:
      "https://i.pinimg.com/564x/fc/74/e0/fc74e0344f537ba472f9268c6ff5abbc.jpg",
  },
  {
    title: "2 Series",
    image:
      "https://i.pinimg.com/564x/53/16/70/53167015a43b306921522d0650a81fba.jpg",
  },
  {
    title: "3 Series",
    image:
      "https://www.travelandtourworld.com/wp-content/uploads/2024/02/Award-General-850x485.jpg",
  },
  {
    title: "4 Series",
    image:
      "https://tourismquest.com/wp-content/uploads/2024/03/Live-Concert.jpg",
  },
  {
    title: "5 Series",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyDdLBW29tETzMKBN7K4bgUCYuXJ4YTGzXQ&s",
  },
];

export const Carousel1 = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        autoplay={{ delay: 8000, disableOnInteraction: false }} // Autoplay configuration
        pagination={{ clickable: true }}
        navigation={true} // Enable navigation buttons
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]} // Include Navigation module
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <a>explore</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
