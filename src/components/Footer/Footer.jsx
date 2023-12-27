import React from "react";

import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    path: "",
    icon: <FaInstagram />,
  },
  {
    path: "",
    icon: <FaFacebook />,
  },
  {
    path: "",
    icon: <SiGmail />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/consult",
    display: "Consultancy Form",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quickLinks02 = [
  {
    path: "/cart",
    display: "Cart",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px">

          <div>
            <img src="" alt="Logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor">
              Copyright &copy {year} all rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20] font-[700] mb-6 text-headingColor">
              My Orders
            </h2>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
