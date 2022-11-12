import React from "react";

const SingleCard = ({ card }) => {
  const { title, img, details, bgColor } = card;

  return (
    <div>
      <div
        className={`card card-side shadow-xl ${bgColor} text-white p-6 min-h-[190px] max-h-[190px] `}
      >
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-left">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
