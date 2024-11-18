import { motion } from "motion/react";

const Education = ({
  // eslint-disable-next-line react/prop-types
  from = "",
  // eslint-disable-next-line react/prop-types
  to = "Current",
  // eslint-disable-next-line react/prop-types
  name = "Name Project",
  // eslint-disable-next-line react/prop-types
  desc = "",
  // eslint-disable-next-line react/prop-types
  link,
  // eslint-disable-next-line react/prop-types
  img,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="flex"
    >
      <div className="border-r-2 border-black min-h-[400px] min-w-[20%]"></div>
      <div className="w-full flex items-center relative">
        <div className="pl-20 ml-10 bg-blue-800/70  rounded-md shadow-lg px-4 py-4 relative z-20">
          <p>
            Time: {from ? `${from} - ` : ""}
            {to}
          </p>
          <h3 className="text-4xl capitalize">{name}</h3>
          <p>{desc}</p>
          {link ? (
            <a
              href={link}
              target="_blank"
              className="cursor-pointer text-red-600"
            >
              Link
            </a>
          ) : (
            " "
          )}
        </div>
        <img
          className="w-[80%] max-w-[500px] absolute mx-auto left-[50%]  translate-x-[-50%] opacity-20 "
          src={img}
          alt={name}
        />
        <div className="w-4 h-4 z-1 border-2 bg-blue-600 left-[-9px] rounded-full absolute"></div>
      </div>
    </motion.div>
  );
};

export default Education;
