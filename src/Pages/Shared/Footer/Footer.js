import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footerBg})` }}
      className=" bg-cover bg-center"
    >
      <footer className="footer p-10 ">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <div className="pb-6">
        <p>Copyright © 2022 - All rights reserved by Doctors Portal</p>
      </div>
    </div>
  );
};

export default Footer;
