import React from "react";
import treatmentImg from "../../../assets/images/treatment.png";
import StartButton from "../../../UtilityComponents/StartButton/StartButton";

const TreatInfo = () => {
  return (
    <div>
      <div className=" md:flex items-center gap-6 lg:mx-36 md:mx-8 pb-40 mx-auto">
        <div className="basis-1/2 mx-12">
          <img
            className="rounded-lg lg:min-w-full mx-auto"
            src={treatmentImg}
            alt=""
          />
        </div>
        <div className="basis-1/2 mx-6 text-left">
          <h1 className="text-5xl font-bold mt-8">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="mt-4 mb-9">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <StartButton>GET STARTED</StartButton>
        </div>
      </div>
    </div>
  );
};

export default TreatInfo;
