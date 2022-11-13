import React from "react";

const TestimonialCard = ({ card }) => {
  const { img, name, location, details } = card;
  return (
    <div>
      <div className="p-8 border rounded-xl shadow-md min-h-[270px]">
        <p>{details}</p>
        <div className="flex items-center mt-9">
          <img className="mr-4" src={img} alt="" />
          <div>
            <h2>{name}</h2>
            <small>{location}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
