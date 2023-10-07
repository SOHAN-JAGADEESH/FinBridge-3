import styles from "../style";
import { logo } from "../assets";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constants";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-darkGray py-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 pl-4 md:pl-0">
        <Link to="/">
            <img src={logo} alt="FinBridge logo" className="w-[124px] h-[32px]" />
        </Link>
        </div>

        <div className="mt-6 md:mt-0 text-white text-sm">
           2023 Finbridge. All rights reserved.
        </div>

        <div className="flex flex-col space-y-4 pr-4 md:pr-0">
          {navLinks.map((nav, index) => (
            <NavLink
              key={nav.id}
              to={
                index === 0
                  ? "/"
                  : index === 1
                  ? "/dollar"
                  : index === 3
                  ? "/information"
                  : index === navLinks.length - 1
                  ? "/survey"
                  : index === 2
                  ? "/compare"
                  : `#${nav.id}`
              }
              activeClassName="text-emerald"
              className="text-white text-sm hover:text-emerald"
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
