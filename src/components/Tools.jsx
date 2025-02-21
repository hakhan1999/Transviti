import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const tabs = [
  {
    id: 1,
    tabText: "productivity",
    link: "#",
  },
  {
    id: 2,
    tabText: "engineering",
    link: "#",
  },
  {
    id: 3,
    tabText: "design",
    link: "#",
  },
  {
    id: 4,
    tabText: "writing",
    link: "#",
  },
];

const Tools = () => {
  return (
    <section className="tools-sec container" id="tools">
      <div className="top-sec">
        <div className="para-sec">
          <h2>There’s an extension for that.</h2>
          <p>Use your favorite tools without even opening them.</p>
        </div>
        <div className="tabs">
          {tabs.map((item) => (
            <div className="tab-link">
              <div className="active-backdrop" />
              <Link key={item.id} to={item.link} data-tab={item.tabText}>
                {item.tabText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Tools;
