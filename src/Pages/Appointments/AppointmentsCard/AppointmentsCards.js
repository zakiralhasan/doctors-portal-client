import React from "react";
import { format } from "date-fns";
import { useState } from "react";
import AppointmentsCard from "./AppointmentsCard";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../UtilityComponents/StartButton/Loading";

const AppointmentsCards = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP"); //used for query search

  //used for react query or transtack query
  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointmentOptions", date], //this is works as like useEffect()? or useEffect dependency?
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  return (
    <div className="mb-32">
      <h1 className="text-xl text-[#19D3AE] font-bold mb-2">
        Available Appointments on {format(selectedDate, "PP")}
      </h1>

      {/* used for data loading waiting time */}
      {isLoading && <Loading />}

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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentsCards;
