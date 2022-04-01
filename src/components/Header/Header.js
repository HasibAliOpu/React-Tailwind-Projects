import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/icon/company-logo.png";
const Header = () => {
  return (
    <div className="bg-teal-300">
      <div className="flex justify-between items-center p-4">
        <div className="">
          <img src={Logo} className="w-20" alt="" />
        </div>
        <div>
          <ul className="flex font-bold font-sans gap-10 text-xl">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">CORPORATE GOVERNANCE</Link>
            </li>
            <li>
              <Link to="/">WHAT WE WOULD DO</Link>
            </li>
            <li>
              <Link to="/">FIRST PROJECT</Link>
            </li>
            <li>
              <Link to="/">ABOUT US</Link>
            </li>
            <li>
              <Link to="/">OUR TEAM</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
