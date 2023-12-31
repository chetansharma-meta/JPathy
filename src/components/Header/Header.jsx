import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import avatar from "../../assets/avatar.png";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {FaCartPlus} from 'react-icons/fa'


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/allpost",
    display: "Doctor's Corner",
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

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const bannerRef = useRef(null);
  
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  const hideBanner = () => {
    bannerRef.current.style.display = "none";
  };

  return (
    <>
    {/* -------------------------------Banner----------------------------------------------- */}
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-primaryColor px-6 py-2.5 sm:px-3.5 sm:before:flex-1" ref={bannerRef}>
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem]"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem]"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-50">
            <strong className="text-white">Talk to the Doctor</strong>
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-100 px-3.5 py-1 text-sm  text-textColor shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Contact Now
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-100" aria-hidden="true" onClick={hideBanner}/>
          </button>
        </div>
      </div>

{/* -------------------------------------------------Navbar------------------------------------------------ */}
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="font-bold">
              <img src="" alt="Jpathy" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[500]"
                          : "text-gray-700 text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden">
                <Link to="/">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={avatar}
                      className="w-full rounded-full"
                      alt="User"
                    />
                  </figure>
                </Link>
              </div>

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer text-white" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
