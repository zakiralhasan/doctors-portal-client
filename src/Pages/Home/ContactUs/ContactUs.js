import React from "react";
import contactBg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div style={{ background: `url(${contactBg})` }} className="mb-12">
      <div className="md:w-[450px] mx-auto py-16 px-9">
        <h2 className="text-xl font-bold text-[#19D3AE]">Contact Us</h2>
        <h1 className="text-4xl text-white mt-3 mb-10">
          Stay connected with us
        </h1>
        <form>
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              className="textarea textarea-bordered mt-5 mb-10"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md text-white font-bold px-9 py-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
