import Title from "./Title";
import clown_icon from "../assets/clown.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8add0636-f3bd-4792-81a2-51e2474885d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      event.target.reset();
      toast.success("Have sent it");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      id="Contact"
      className="mb-10 px-[2%]"
    >
      <Title title={"Contact"} />
      <div className="flex items-center justify-center mt-6 text-center">
        <form className="max-w-2xl w-full mx-auto " onSubmit={onSubmit}>
          <input type="hidden" name="web_cv" value={"From Profile Web"} />
          <div className="flex gap-6">
            <p>Who are u?</p>
            <div className="flex items-center">
              <input type="radio" name="who" value={"Recruiter"} />
              <p className="ml-2">Recruiter</p>
            </div>
            <div className="flex items-center">
              <input type="radio" name="who" value={"Human"} />
              <p className="mx-2">Human</p>
              <img className="w-5" src={clown_icon} alt="clown_icon" />
            </div>
          </div>
          <div className="flex gap-9 my-6 text-left">
            <div className="w-1/2">
              <p>Name</p>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div className="w-1/2">
              <p>Email</p>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="mb-7 text-left">
            <p>Message</p>
            <textarea
              className="min-h-28 w-full px-4 py-3 border border-gray-400"
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            className="cursor-pointer px-12 py-2 rounded-md border bg-blue-600 text-white"
            type="submit"
          >
            {result ? result : "Submit"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
