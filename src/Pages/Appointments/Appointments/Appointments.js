import React, { useState } from "react";
import AppointmentsBanner from "../AppointmentsBanner/AppointmentsBanner";
import AppointmentsCards from "../AppointmentsCard/AppointmentsCards";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentsBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentsBanner>
      <AppointmentsCards
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentsCards>
    </div>
  );
};

export default Appointments;
