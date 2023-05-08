import React from "react";
import aboutus from "../images/about_optimized.webp";
import WaterWave from "react-water-wave";

const AboutUs = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <WaterWave
        // imageUrl={bgg}
        style={{ width: "100%", height: "100%" }}
        children={() => (
          <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-between md:p-20 py-12 px-4">
            <div className="flex flex-col justify-start items-start blue-violet xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px]">
              <h1
                className="text-3xl sm:text-5xl py-2 font-bold"
                style={{ fontWeight: "700!important" }}
              >
                ArabianChain Team
              </h1>
              <h3 className="text-white text-3xl my-4">
                Our blockchain can transform your business
              </h3>
              <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                We are a group of multinational, talented and diverse
                professionals aiming to bring the next big thing in blockchain
                technology into reality. The group was founded in Feb 2016.
              </p>
              <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                In ArabianChain, we aim to revolutionize the way Governments,
                Businesses and individuals perceive and deal with Economy,
                E-Services and Digital transformation by leading the way in
                entrepreneurial thinking and innovation in blockchain
                technology.
              </p>
              <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                Our unique collection of experiences from top international
                firms such as Microsoft, Dell, Ericsson and Oracle in addition
                to our vertical business domain knowledge in banking,
                telecommunications, healthcare and public sector puts us in an
                advantages position to bringing positive change to the thriving
                economy in the MENA region.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center">
              <img src={aboutus} alt="logo" className="" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default AboutUs;
