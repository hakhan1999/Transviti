import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carousel = ({ activeTab, categories = {} }) => {
  useEffect(() => {
    const activeCarousel = document.querySelector(".carousel-swiper.active");

    if (activeCarousel) {
      gsap.fromTo(
        activeCarousel.querySelectorAll(".carousel-wrapper"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: activeCarousel,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [activeTab]);
  return (
    <div className="carousel">
      {Object.entries(categories).map(([key, items]) => (
        <Swiper
          key={key}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={56}
          loop={true}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4 },
          }}
          className={`carousel-swiper ${activeTab === key ? "active" : ""}`}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={`${item.class} carousel-wrapper`}>
                <div className="content">
                  <div className="top">
                    <div className="top-left">
                      <img src={item.iconURL} alt="Icon" />
                      <h3>{item.heading}</h3>
                    </div>
                    <div className="top-right">
                      <img
                        src="src/assets/arrow-carousel.svg"
                        alt="Arrow Icon"
                      />
                    </div>
                  </div>
                  <div className="bottom">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="image">
                  <img src={item.imageURL} alt={`${item.class}-image`} />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="browseBtn">
            <Link to="#">
              <p>Browse thousands more</p>
              <img src="src/assets/arrow-learn.svg" alt="Arrow Browse" />
            </Link>
          </div>
        </Swiper>
      ))}
    </div>
  );
};

export default Carousel;
