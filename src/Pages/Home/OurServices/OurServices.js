import React from "react";
import logo1 from "../../../assets/images/fluoride.png";
import logo2 from "../../../assets/images/cavity.png";
import logo3 from "../../../assets/images/whitening.png";
import OurServicesCard from "./OurServicesCard";

const OurServices = () => {
  // const color1
  const cards = [
    {
      id: "1",
      title: "Fluoride Treatment",
      img: logo1,
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "2",
      title: "Cavity Filling",
      img: logo2,
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: "3",
      title: "Teeth Whitening",
      img: logo3,
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="px-5 my-32">
      <h2 className="text-xl text-[#19D3AE] font-bold mb-2">OUR SERVICES</h2>
      <h1 className="text-4xl ">Services We Provide</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pb-6 mt-16">
        {cards.map((card) => (
          <OurServicesCard key={card.id} card={card}></OurServicesCard>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
