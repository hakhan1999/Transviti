import React from "react";
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
  return (
    <nav>
      {navLinks.map((item) => (
        <li key={item.id}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
