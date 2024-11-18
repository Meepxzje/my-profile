import Home from "./components/Home";
import Personal from "./components/Personal";
import Project from "./components/Project";
import Title from "./components/Title";
import { data } from "./assets/data_projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faListUl } from "@fortawesome/free-solid-svg-icons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ProjectImage from "./components/ProjectImage";
import left_arrow from "./assets/left_arrow.svg";
import right_arrow from "./assets/right_arrow.svg";

const App = () => {
  const [list, setList] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectCount = data.length; 
  const prevProjects = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectCount - 1 : prev - 1));
  };
  const nextProjects = () => {
    setCurrentIndex((prev) => (prev === projectCount - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Home />
      <Personal />
      <div className="bg-blue-300/20 scroll-mt-20" id="Project">
        <Title title={"My projects"} />
        <div className="flex justify-center items-center gap-8 text-xl pb-4 cursor-pointer border-b-2">
          <FontAwesomeIcon
            icon={faListUl}
            title="list"
            className="px-4 py-4"
            onClick={() => setList(true)}
          />
          <FontAwesomeIcon
            icon={faImages}
            title="image"
            className="px-4 py-4"
            onClick={() => setList(false)}
          />
        </div>
        {list ? (
          <div className="max-h-[800px] overflow-y-scroll no-scrollbar">
            {data.map((i, index) => (
              <div key={index}>
                <Project
                  from={i.from}
                  to={i.to}
                  name={i.name}
                  desc={i.description}
                  link={i.link}
                  img={i.img}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-96">
            <div className="flex items-center mb-8 justify-center">
              <button
                onClick={prevProjects}
                className="p-3 bg-gray-200 rounded mr-2"
                aria-label="Previous Project"
              >
                <img src={left_arrow} alt="left_arrow" />
              </button>
              <button
                onClick={nextProjects}
                className="p-3 bg-gray-200 rounded mr-2"
                aria-label="Next Project"
              >
                <img src={right_arrow} alt="right_arrow" />
              </button>
            </div>
            <div className="px-[19%] my-5 py-10">
              <ProjectImage currentIndex={currentIndex} />
            </div>
          </div>
        )}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
