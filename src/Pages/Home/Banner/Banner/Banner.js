import React from "react";
import BannerCards from "../BannerCards/BannerCards";
import BannerImage from "../BannerImage/BannerImage";
import bannerBG from "../../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div style={{ background: `url(${bannerBG})` }} className="bg-cover">
      <BannerImage></BannerImage>
      <BannerCards></BannerCards>
    </div>
  );
};

export default Banner;
