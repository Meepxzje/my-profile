import Title from "./Title";
import avt_img from "../assets/avt.jpg";
import Education from "./Education";
import education_img1 from "../assets/education1.png";
import education_img2 from "../assets/education2.png";
import { motion } from "motion/react";

const Personal = () => {
  return (
    <div id="Personal" className="scroll-mt-36 px-20 py-14 overflow-hidden">
      <Title title={"personal information"} description={"description"} />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="w-full block md:flex justify-between "
      >
        <div className="md:w-1/2 w-full mb-20">
          <img
            className="w-64 mx-auto border shadow-xl rounded"
            src={avt_img}
            alt="avt_img"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="text-3xl">Trịnh Minh Thuận</div>
          <div className="my-5">
            <h4 className="text-2xl mb-4">General Info</h4>
            <div className="flex justify-between">
              <ul className="w-1/3">
                <li>Giới tính</li>
                <li>Ngày sinh</li>
                <li>SDT</li>
                <li>Gmail</li>
                <li>Địa chỉ</li>
              </ul>
              <ul className="w-2/3">
                <li>Nam</li>
                <li>30/04/2002</li>
                <li>0347575627</li>
                <li>minhthuan.meep@gmail.com</li>
                <li>Gò Vấp, HCM</li>
              </ul>
            </div>
          </div>

          <div className="my-10">I&apos;m newbie web developer</div>
        </div>
      </motion.div>
      <div>
        <h3 className="text-center text-3xl mt-3"> Education</h3>
        <Education
          from="2020"
          to="2024"
          name="Saigon Technology University"
          desc="Level: Good, GPA: 3.03"
          img={education_img1}
        />
        <Education
          to="11/2024"
          name="HTML & CSS Certificate – F8"
          link={"https://fullstack.edu.vn/cert/dpa60"}
          img={education_img2}
        />
      </div>
    </div>
  );
};

export default Personal;
