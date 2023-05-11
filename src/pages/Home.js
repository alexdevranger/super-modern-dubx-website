import React from "react";
import {
  Navbar,
  Arabian,
  Services,
  ContactUs,
  Project,
  Ai,
  DBank,
  AnimatedRoutes,
} from "../components";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Arabian />
      </div>
      <Project />
      <Services />
      <AnimatedRoutes />
      <Ai />
      <DBank />
      <ContactUs />
    </div>
  );
};

export default Home;
