import { useState, useEffect } from "react";
import { close, logo, menu, navbg } from "../assets";

import { navLinks } from "../constants";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const [visitedPages, setVisitedPages] = useState([]);

  useEffect(() => {
    if (location.pathname && !visitedPages.includes(location.pathname)) {
      setVisitedPages((prevPages) => [...prevPages, location.pathname]);
    }
  }, [location.pathname]);

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <Link to="/">
        <img src={logo} alt="FinBridge logo" className="w-[154px] h-[32px]" />
      </Link>

       
      <div className="flex flex-1 justify-end items-center">
        <img
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          style={{ filter: isHovered ? "invert(35%) sepia(93%) saturate(743%) hue-rotate(123deg) brightness(92%) contrast(89%)" : "" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out fixed top-0 right-0 h-full w-[250px] p-6 pt-20`}
          style={{ 
            zIndex: 1000, 
            background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9)), url(${navbg}), rgba(0, 0, 0, 1)`
          }}
        >
          {/* Close Icon */}
          <img
              src={close}
              alt="close"
              className="w-[22px] h-[22px] object-contain cursor-pointer absolute top-4 right-4"
              style={{ 
                filter: isHovered 
                  ? 'invert(35%) sepia(60%) saturate(400%) hue-rotate(130deg)'  // Color for #007e57
                  : 'invert(35%) sepia(93%) saturate(743%) hue-rotate(123deg) brightness(92%) contrast(89%)'  // Color for #1CE8A8
              }}
              onClick={() => setToggle(false)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />

            <ul className="list-none flex flex-col justify-start items-start h-full">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[#1CE8A8] text-[16px] ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  } `}
                >
                <NavLink
                  to={index === 0 ? "/" : index === 1 ? "/dollar" : index === 2 ? "/compare" : index === 3 ? "/information" : index === 4 ? "/survey" : index === 5 ? "/analyze"  : `#${nav.id}`}
                  activeClassName="text-[#1CE8A8]"
                  className="text-[#1CE8A8] hover:text-[#007e57]"
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
