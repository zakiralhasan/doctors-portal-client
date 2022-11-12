import React from "react";
import BannerImage from "./BannerImage";
import bannerBG from "../../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${bannerBG})` }}
      className="bg-cover bg-center"
    >
      <BannerImage></BannerImage>
    </div>
  );
};

export default Banner;
