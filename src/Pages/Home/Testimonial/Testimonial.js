import React from "react";
import logo1 from "../../../assets/images/people1.png";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const cards = [
    {
      id: "1",
      name: "Winson Herry",
      location: "California",
      img: logo1,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "2",
      name: "Winson Herry",
      location: "California",
      img: logo1,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: "3",
      name: "Winson Herry",
      location: "California",
      img: logo1,
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>
      <div className="px-5 my-32 text-left">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl text-[#19D3AE] font-bold mb-2">
              Testimonial
            </h2>
            <h1 className="text-4xl ">What Our Patients Says</h1>
          </div>
          <div>
            <img className="lg:w-48 w-20" src={quote} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 pb-6 mt-20">
          {cards.map((card) => (
            <TestimonialCard key={card.id} card={card}></TestimonialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
