import { motion } from "motion/react";


// eslint-disable-next-line react/prop-types
const Project = ({from="",to="Current", name="Name Project", desc ="Description", link="#",img}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
     className="flex px-[2%]">
      <div className="border-r-2 border-black min-h-[400px] min-w-[20%]"></div>
      <div className=" w-full   flex items-center relative">
        <div className="pl-20 max-w-[800px] z-10  ml-10 bg-gray-600 text-white rounded-md shadow-lg px-4 py-4">
          <p> Time: {from ? `${from} - ` : ""}{to}</p>
          <h3 className="text-4xl capitalize">{name}</h3>
          <p>{desc}</p>
          <a href={link} target="_blank" className="cursor-pointer text-red-600">
            Demo
          </a>
        </div>
        <img
          className="w-[80%] max-w-[500px] absolute mx-auto left-[50%] translate-x-[-50%] opacity-50 "
          src={img}
          alt={name}
        />
        <div className="w-4 h-4 z-1 border-2 bg-blue-600 left-[-9px] rounded-full absolute"></div>
      </div>
    </motion.div>
  );
};

export default Project;
