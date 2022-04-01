import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
import Logo from "../../images/icon/company-logo.png";
const Header = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center p-4">
        <div className="flex justify-center mb-4 md:mb-0 md:static">
          <img src={Logo} className="w-20" alt="" />
        </div>
        <div>
          <ul className="md:flex font-semibold gap-10 text-xl">
            <li>
              <CustomLink to="/">HOME</CustomLink>
            </li>
            <li>
              <CustomLink to="/">CORPORATE GOVERNANCE</CustomLink>
            </li>
            <li>
              <CustomLink to="/">WHAT WE WOULD DO</CustomLink>
            </li>
            <li>
              <CustomLink to="/">FIRST PROJECT</CustomLink>
            </li>
            <li>
              <CustomLink to="/">ABOUT US</CustomLink>
            </li>
            <li>
              <CustomLink to="/">OUR TEAM</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
