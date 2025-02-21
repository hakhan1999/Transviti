import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Carousel from "./Carousel";

const tabs = [
  { id: 1, tabText: "productivity", link: "#" },
  { id: 2, tabText: "engineering", link: "#" },
  { id: 3, tabText: "design", link: "#" },
  { id: 4, tabText: "writing", link: "#" },
];
const categories = {
  productivity: [
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
  ],
  engineering: [
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
  ],
  design: [
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
  ],
  writing: [
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
    {
      id: 3,
      iconURL: "src/assets/google-translate-icon.webp",
      heading: "Google Translate",
      description:
        "Use Google Translate to effortlessly translate into multiple languages",
      imageURL: "src/assets/google-translate-web.webp",
      class: "google",
    },
    {
      id: 4,
      iconURL: "src/assets/arc-icon.webp",
      heading: "Arc",
      description:
        "Navigate your open tabs or search through your browser history.",
      imageURL: "src/assets/arc-web.webp",
      class: "arc",
    },
    {
      id: 5,
      iconURL: "src/assets/google-translate-icon.webp",
      heading: "Google Translate",
      description:
        "Use Google Translate to effortlessly translate into multiple languages",
      imageURL: "src/assets/google-translate-web.webp",
      class: "google",
    },
  ],
};

const Tools = () => {
  const [activeTab, setActiveTab] = useState("productivity");

  return (
    <section className="tools-sec" id="tools">
      <div className="top-sec container">
        <div className="para-sec">
          <h2>There’s an extension for that.</h2>
          <p>Use your favorite tools without even opening them.</p>
        </div>
        <div className="tabs">
          {tabs.map((item) => (
            <div
              key={item.id}
              className={`tab-link ${
                activeTab === item.tabText ? "active" : ""
              }`}
              onClick={() => setActiveTab(item.tabText)}
            >
              <div className="active-backdrop" />
              <Link to={item.link}>{item.tabText}</Link>
            </div>
          ))}
        </div>
      </div>
      <Carousel activeTab={activeTab} categories={categories} />
    </section>
  );
};

export default Tools;
