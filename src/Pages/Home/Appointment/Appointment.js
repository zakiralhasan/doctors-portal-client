import React from "react";
import StartButton from "../../../UtilityComponents/StartButton/StartButton";
import appointmentImg from "../../../assets/images/doctor-small.png";
import appointmentBg from "../../../assets/images/appointment.png";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div
      style={{ background: `url(${appointmentBg})` }}
      className="flex gap-6 items-center lg:px-32 mb-20"
    >
      <div className="basis-1/2 hidden lg:block mt-[-60px]">
        <img className="w-full" src={appointmentImg} alt="" />
      </div>
      <div className="lg:basis-1/2 text-white text-left px-7 py-16">
        <h2 className="text-[#19D3AE] font-bold">Appointment</h2>
        <h1 className="text-4xl font-semibold my-6">
          Make an appointment Today
        </h1>
        <p className="mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Link to="/appointment">
          <StartButton>GET STARTED</StartButton>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
