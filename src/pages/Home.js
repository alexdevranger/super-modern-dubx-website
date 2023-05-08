import React from "react";
import {
  Navbar,
  Arabian,
  Welcome,
  Footer,
  Services,
  Transactions,
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
    </div>
  );
};

export default Home;
