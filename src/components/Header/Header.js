import React, { useState } from "react";
import CustomLink from "../../CustomLink/CustomLink";
import Logo from "../../images/icon/company-logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="w-8 text-sky-400  md:hidden"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <div
        className={`md:flex justify-between items-center p-4 md:static w-full duration-1000 ease-out bg-white absolute ${
          open ? "static" : "top-[-320px]"
        }`}
      >
        <div className="flex justify-center mb-4 md:mb-0 md:static">
          <img src={Logo} className="w-20" alt="" />
        </div>
        <div>
          <ul className="md:flex font-semibold gap-10 text-xl">
            <li>
              <CustomLink to="/">HOME</CustomLink>
            </li>
            <li>
              <CustomLink to="/corporate-governance">
                CORPORATE GOVERNANCE
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/what-we-would-do">WHAT WE WOULD DO</CustomLink>
            </li>
            <li>
              <CustomLink to="/first-project">FIRST PROJECT</CustomLink>
            </li>
            <li>
              <CustomLink to="/about-us">ABOUT US</CustomLink>
            </li>
            <li>
              <CustomLink to="/our-team">OUR TEAM</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
