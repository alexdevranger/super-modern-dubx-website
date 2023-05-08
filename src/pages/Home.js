import React from "react";
import {
  Navbar,
  Arabian,
  Welcome,
  Footer,
  Services,
  ContactUs,
  Project,
  Ai,
  Roadmap,
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
      {/* <Transactions /> */}
      <AnimatedRoutes />
      <Roadmap />
      <Ai />
      <DBank />
      <ContactUs />
    </div>
  );
};

export default Home;
