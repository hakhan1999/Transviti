import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    name: "Store",
    path: "#",
  },
  {
    id: 2,
    name: "Pro",
    path: "#",
  },

  {
    id: 3,
    name: "Teams",
    path: "#",
  },

  {
    id: 4,
    name: "Developers",
    path: "#",
  },

  {
    id: 5,
    name: "Changelog",
    path: "#",
  },

  {
    id: 6,
    name: "Blog",
    path: "#",
  },

  {
    id: 7,
    name: "Pricing",
    path: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="desktop-nav">
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mobile-nav">
        <img
          src={
            isOpen ? "src/assets/close-icon.svg" : "src/assets/menu-icon.svg"
          }
          alt="Menu Icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{ display: window.innerWidth < 1024 ? "block" : "none" }}
        />
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          <div className="log-in">
            <Link to="#">Log In</Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
