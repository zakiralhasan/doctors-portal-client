import React from "react";
import logo1 from "../../../assets/icons/clock.svg";
import logo2 from "../../../assets/icons/marker.svg";
import logo3 from "../../../assets/icons/phone.svg";
import SingleCard from "./SingleCard";

const CardSection = () => {
  // const color1
  const cards = [
    {
      id: "1",
      title: "Opening Hours",
      img: logo1,
      details: "Lorem Ipsum is simply dummy text of the pri",
      bgColor: "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]",
    },
    {
      id: "2",
      title: "Visit our location",
      img: logo2,
      details: "Brooklyn, NY 10036, United States",
      bgColor: "bg-[#3A4256]",
    },
    {
      id: "3",
      title: "Contact us now",
      img: logo3,
      details: "+000 123 456789",
      bgColor: "bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]",
    },
  ];
  return (
    <div className="px-5 mb-32">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
