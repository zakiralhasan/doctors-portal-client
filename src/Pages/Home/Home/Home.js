import React from "react";
import Appointment from "../Appointment/Appointment";
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
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
