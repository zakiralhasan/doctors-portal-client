import React from "react";
import Banner from "../Banner/Banner/Banner";
import CardSection from "../CardSection/CardSection";

import OurServices from "../OurServices/OurServices";
import TreatInfo from "../TreatInfo/TreatInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardSection></CardSection>
      <OurServices></OurServices>
      <TreatInfo></TreatInfo>
    </div>
  );
};

export default Home;
