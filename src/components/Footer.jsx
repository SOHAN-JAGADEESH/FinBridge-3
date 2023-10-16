import React from "react";
import { logo } from "../assets";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constants";

/**
 * Footer Component
 * 
 * This component displays a footer with the FinBridge logo, navigation links, and copyright information.
 * 
 * @returns {React.Element} A rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-darkGray py-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col justify-center items-center text-center">
        
        {/* Logo Section */}
        <div className="mb-4">
          {/* Link wrapping the logo, redirects to the homepage when clicked */}
          <Link to="/">
            {/* Logo Image */}
            <img src={logo} alt="FinBridge logo" className="w-[224px] h-[52px]" />
          </Link>
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-wrap justify-center mb-4 space-x-4">
          {/* Loop through the navLinks array and generate navigation links */}
          {navLinks.map((nav, index) => (
            <React.Fragment key={nav.id}>
              <NavLink
                to={
                  index === 0
                    ? "/"
                    : index === 1
                    ? "/dollar"
                    : index === 4
                    ? "/survey"
                    : index === 3
                    ? "/information"
                    : index === navLinks.length - 1
                    ? "/analyze"
                    : index === 2
                    ? "/compare"
                    : `#${nav.id}`
                }
                activeClassName="text-emerald" // Apply styles when the link is active
                className="text-white text-sm hover:text-emerald" // Default styles for the link
              >
                {nav.title} {/* Display the title of the navigation link */}
              </NavLink>
              {/* Add a separator '|' between links, except after the last link */}
              {index !== navLinks.length - 1 && <span className="text-white mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright Information Section */}
        <div className="text-white text-sm">
           © 2023 Finbridge. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
