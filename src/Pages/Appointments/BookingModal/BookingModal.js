import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const appointmentSlot = form.slot.value;
    const fullName = form.fullName.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      treatmentName: name,
      appointmentDate: date,
      appointmentTime: appointmentSlot,
      patientName: fullName,
      patientPhone: phone,
      patientEmail: email,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative rounded-lg">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-left font-bold">{name}</h3>
          <form onSubmit={handleForm} className="mt-12 mb-8">
            <div className="flex flex-col gap-6 px-3">
              <input
                type="text"
                name="date"
                disabled
                defaultValue={date}
                className="input input-bordered w-full "
              />
              <select name="slot" className="select select-bordered w-full ">
                <option>Choose one</option>
                {slots.map((slot, index) => (
                  <option value={slot} key={index}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <button className="bg-[#3A4256] rounded-md text-[#D4D9E3] font-bold py-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
