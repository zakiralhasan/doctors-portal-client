import React from "react";

const OurServicesCard = ({ card }) => {
  const { title, img, details } = card;
  return (
    <div>
      <div className="p-10 border rounded-xl shadow-md min-h-[310px] max-h-[310px]">
        <img className="w-fit mx-auto" src={img} alt="" />
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
