import Navbar from "./Navbar";
import home_img from "../assets/home.png";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import gmail_icon from "../assets/gmail_icon.png";
import bg_img from "../assets/bg.jpg";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/cv/cv_trinhminhthuan.pdf";
import down_icon from "../assets/down_icon.gif";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg_img})` }}
        id="Home"
      >
        <Navbar />
        <div className="container md:flex w-full justify-between md:pl-28 ">
          <div>
            <div className="text-white px-7 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="min-h-96"
              >
                <p className="mb-4 lg:text-7xl text-4xl">Hi! I&apos;m</p>
                {/* <p className="lg:text-8xl text-green-600 ">Trịnh Minh Thuận</p> */}
                <ReactTyped
                  className="lg:text-8xl text-6xl text-green-600 text-meep"
                  strings={["Meep", "Trịnh Minh Thuận"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
              >
                <ul className="flex items-center gap-6 md:mt-12 justify-center md:justify-start">
                  <a
                    className="text-white text-5xl cursor-pointer"
                    href="#"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    className="text-white text-5xl cursor-pointer"
                    href="#"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    className="cursor-pointer flex w-[46.5px] h-[48px] items-center bg-white p-2 rounded-full px-2"
                    href="#"
                    target="_blank"
                  >
                    <img className="w-8" src={gmail_icon} alt="gmail_icon" />
                  </a>

                  <a
                    className="text-white  cursor-pointer relative"
                    href={cv}
                    target="_blank"
                    download={"cv_trinhminhthuan"}
                  >
                    <FontAwesomeIcon size="3x" icon={faFile} />
                    <p className="absolute top-0 text-red-600 z-1">Cv</p>
                  </a>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="hidden md:w-[400px] md:h-[400px] lg:w-[400px]   md:block"
            src={home_img}
            alt="home_img"
          />
        </div>
        <a href="#Personal" className="absolute bottom-[10%] bg-blue-600 rounded-full px-14 py-4 text-white flex items-center">
          <p className="uppercase">Khám phá ngay</p>
          <img className="w-5 ml-3" src={down_icon} alt="down_icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
