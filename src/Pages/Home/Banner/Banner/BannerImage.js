import React from "react";
import chairImg from "../../../../assets/images/chair.png";
import StartButton from "../../../../UtilityComponents/StartButton/StartButton";

const BannerImage = () => {
  return (
    <div className="md:flex flex-row-reverse items-center gap-6 px-10 pt-48 pb-64">
      <div>
        <img src={chairImg} alt="" />
      </div>
      <div>
        <h1 className="text-5xl font-bold mt-16">Your New Smile Starts Here</h1>
        <p className="mt-4 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <StartButton>GET STARTED</StartButton>
      </div>
    </div>
  );
};

export default BannerImage;
