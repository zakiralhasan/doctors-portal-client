import React from "react";
import { format } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import AppointmentsCard from "./AppointmentsCard";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentsCards = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState();
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/appointmentOptions`)
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);

  return (
    <div className="mb-32">
      <h1 className="text-xl text-[#19D3AE] font-bold mb-2">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pb-6 mt-24 mx-6 md:mx-12">
        {appointmentOptions?.map((appointmentOption) => (
          <AppointmentsCard
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          ></AppointmentsCard>
        ))}
      </div>
      {/* modal called and some porps send */}
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentsCards;
