import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const productivity = [
  {
    id: 1,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
  {
    id: 2,
    iconURL: "src/assets/google-translate-icon.webp",
    heading: "Google Translate",
    description:
      "Use Google Translate to effortlessly translate into multiple languages",
    imageURL: "src/assets/google-translate-web.webp",
    class: "google",
  },
  {
    id: 3,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
  {
    id: 4,
    iconURL: "src/assets/google-translate-icon.webp",
    heading: "Google Translate",
    description:
      "Use Google Translate to effortlessly translate into multiple languages",
    imageURL: "src/assets/google-translate-web.webp",
    class: "google",
  },
  {
    id: 5,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
];

const engineering = [
  {
    id: 1,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
  {
    id: 2,
    iconURL: "src/assets/color-picker-icon.webp",
    heading: "Color Picker",
    description:
      "Pick and save colors from anywhere and access them from the menu bar.",
    imageURL: "src/assets/color-picker-web.webp",
    class: "color-picker",
  },
  {
    id: 3,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
  {
    id: 4,
    iconURL: "src/assets/color-picker-icon.webp",
    heading: "Color Picker",
    description:
      "Pick and save colors from anywhere and access them from the menu bar.",
    imageURL: "src/assets/color-picker-web.webp",
    class: "color-picker",
  },
  {
    id: 5,
    iconURL: "src/assets/linear-icon.webp",
    heading: "Linear",
    description:
      "Create, search and modify your issues without leaving your keyboard.",
    imageURL: "src/assets/linear-web.webp",
    class: "linear",
  },
];

const design = [
  {
    id: 1,
    iconURL: "src/assets/color-picker-icon.webp",
    heading: "Color Picker",
    description:
      "Pick and save colors from anywhere and access them from the menu bar.",
    imageURL: "src/assets/color-picker-web.webp",
    class: "color-picker",
  },
  {
    id: 2,
    iconURL: "src/assets/tiny-png-icon.webp",
    heading: "TinyPNG",
    description: "Compress the selected images in Finder with TinyPNG.",
    imageURL: "src/assets/tiny-png-web.webp",
    class: "tiny-png",
  },
  {
    id: 3,
    iconURL: "src/assets/color-picker-icon.webp",
    heading: "Color Picker",
    description:
      "Pick and save colors from anywhere and access them from the menu bar.",
    imageURL: "src/assets/color-picker-web.webp",
    class: "color-picker",
  },
  {
    id: 4,
    iconURL: "src/assets/tiny-png-icon.webp",
    heading: "TinyPNG",
    description: "Compress the selected images in Finder with TinyPNG.",
    imageURL: "src/assets/tiny-png-web.webp",
    class: "tiny-png",
  },
  {
    id: 5,
    iconURL: "src/assets/color-picker-icon.webp",
    heading: "Color Picker",
    description:
      "Pick and save colors from anywhere and access them from the menu bar.",
    imageURL: "src/assets/color-picker-web.webp",
    class: "color-picker",
  },
];

const writing = [
  {
    id: 1,
    iconURL: "src/assets/google-translate-icon.webp",
    heading: "Google Translate",
    description:
      "Use Google Translate to effortlessly translate into multiple languages",
    imageURL: "src/assets/google-translate-web.webp",
    class: "google",
  },
  {
    id: 2,
    iconURL: "src/assets/arc-icon.webp",
    heading: "Arc",
    description:
      "Navigate your open tabs or search through your browser history.",
    imageURL: "src/assets/arc-web.webp",
    class: "arc",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        loopAdditionalSlides={3}
        navigation={true}
        modules={[Navigation]}
        className="productivity-carousel"
      >
        {productivity.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={`${item.class} carousel-wrapper`}>
              <div className="content">
                <div className="top">
                  <div className="top-left">
                    <img src={item.iconURL} alt="Icon" />
                    <h3>{item.heading}</h3>
                  </div>
                  <div className="top-right">
                    <img src="src/assets/arrow-carousel.svg" alt="Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="image">
                <img src={item.imageURL} alt={`${item.class}-image`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
