import React from "react";
import chairImg from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentsBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 px-10 pt-48 pb-64">
        <div className="basis-1/2">
          <img src={chairImg} alt="" />
        </div>
        <div className=" ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentsBanner;
