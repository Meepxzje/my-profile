import { data } from "../assets/data_projects";

// eslint-disable-next-line react/prop-types
const ProjectImage = ({ currentIndex }) => {
  return (
    <div className="overflow-hidden ">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((i, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full"
          >
            <img className="mx-auto" src={i.img} alt={i.name}  />
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className=" bg-white w-3/4 px-4 py-2 shadow-2xl  text-center inline-flex flex-col items-center justify-center">
                <p>
                  Time: {i.from ? `${i.from} - ` : ""}
                  {i.to}
                </p>
                <h3 className="text-3xl font-semibold text-gray-800">
                  {i.name}
                </h3>
                <p>{i.description}</p>
                <a
                  href={i.link}
                  target="_blank"
                  className="cursor-pointer text-red-600"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImage;
