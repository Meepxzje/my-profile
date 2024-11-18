import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        isScroll ? "bg-black" : ""
      } transition-colors  ease-in-out duration-300 `}
    >
      <div className="container flex items-center justify-between px-6 py-4 mx-auto lg:px-32">
        <img className="w-44 " src={logo} alt="logo" />

        <ul className="hidden md:flex md:gap-10 items-center justify-center">
          <li>
            <a href="#Home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#Personal " className="text-white hover:text-gray-400">
              Personal information
            </a>
          </li>
          <li>
            <a href="#Project" className="text-white hover:text-gray-400">
              My Project
            </a>
          </li>

          <li>
            <a href="#Contact" className="bg-white rounded-full px-8 py-2 hidden md:block cursor-pointer">
              Contact me
            </a>
          </li>
        </ul>

        <button className="text-white block md:hidden cursor-pointer">
          <FontAwesomeIcon size="2x" icon={faBarsStaggered} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
