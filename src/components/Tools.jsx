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
      <Carousel activeTab={activeTab} />
      
    </section>
  );
};

export default Tools;
