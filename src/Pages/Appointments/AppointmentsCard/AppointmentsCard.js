import React from "react";

const AppointmentsCard = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div>
      <div className="py-10 border rounded-xl shadow-md ">
        <div className=" mb-6">
          <h2 className="text-xl text-[#19D3AE] font-semibold mb-2">{name}</h2>
          <p className="text-sm">
            {slots.length > 0 ? slots[0] : "Try another day"}
          </p>
          <p className="mt-2 text-xs">
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} available
          </p>
          <small>Price: ${price}</small>
        </div>
        {/* this label is used for modal open */}
        <label
          disabled={slots.length === 0}
          onClick={() => setTreatment(appointmentOption)}
          htmlFor="booking-modal"
          className="border-none btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md text-white font-bold "
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentsCard;
// {slots.map((slot, index) => (
//     <p key={index}>{slot}</p>
//   ))}
