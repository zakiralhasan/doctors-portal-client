import React from "react";

const AppointmentsCard = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div className="py-10 border rounded-xl shadow-md ">
        <div className="">
          <h2 className="text-xl text-[#19D3AE] font-semibold mb-2">{name}</h2>

          <p className="text-sm">
            {slots.length > 0 ? slots[0] : "Try another day"}
          </p>
          <p className="my-4 text-xs">
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md text-white font-bold px-6 py-4">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentsCard;
// {slots.map((slot, index) => (
//     <p key={index}>{slot}</p>
//   ))}
