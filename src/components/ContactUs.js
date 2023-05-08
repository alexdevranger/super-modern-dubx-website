import React from "react";
import location from "../images/newlocation_optimized.webp";
import WaterWave from "react-water-wave";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ContactUs = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
        <WaterWave
          // imageUrl={bgg}
          style={{ width: "100%", height: "100%" }}
          children={() => (
            <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-between md:p-20 py-12 px-4">
              <div className="flex flex-col justify-center items-center xl:w-[50%] lg:w-[70%] w:full md:w-[100%] m-auto sm:w-full pl-[60px]">
                <h1
                  className="text-3xl sm:text-5xl py-2 font-bold text-center"
                  style={{ fontWeight: "700!important" }}
                >
                  <span className="text-white">NEW OFFICE</span>
                </h1>
                <div className="white-glassmorphism p-10">
                  <h3 className="text-white text-3xl my-4 underline">
                    Dubai Address
                  </h3>
                  <p className="text-center my-2 text-white font-light">
                    Jumeirah Living, Marina Gate
                  </p>
                  <p className="text-center my-2 text-white font-light">
                    M Floor, Dubai Marina
                  </p>
                  <p className="text-center my-2 text-white font-light">
                    Dubai, UAE
                  </p>
                </div>
                <h1
                  className="text-3xl sm:text-5xl py-2 font-bold text-center mt-10"
                  style={{ fontWeight: "700!important" }}
                >
                  <span className="text-white">MAIN OFFICE</span>
                </h1>
                <div className="white-glassmorphism p-10">
                  <h3 className="text-white text-3xl my-4 underline">
                    Kingdom of Bahrain
                  </h3>
                  <p className="text-center my-2 text-white font-light">
                    Office no 302
                  </p>
                  <p className="text-center my-2 text-white font-light">
                    Building 551, Road 4612,
                  </p>
                  <p className="text-center my-2 text-white font-light">
                    Block 346, Manama-Water Bay
                  </p>
                </div>
                {/* <h1
                  className="text-3xl sm:text-5xl py-2 font-bold text-center mt-10"
                  style={{ fontWeight: "700!important" }}
                >
                  <span className="text-white">CONTACT US</span>
                </h1>
                <div className="white-glassmorphism p-10"> */}
                {/* <h3 className="text-white text-3xl my-4">
                    info@arabianchain.org
                  </h3> */}
                {/* <p className="text-center my-2 text-white font-light">
                    info@arabianchain.org
                  </p> */}
                {/* <p className="text-center my-2 text-white font-light">
                    Building 551, Road 4612,
                  </p>
                  <p className="text-center my-2 text-white font-light">
                    Block 346, Manama-Water Bay
                  </p> */}
                {/* </div> */}
              </div>
              <div className="flex flex-col justify-start items-center">
                <LazyLoadImage
                  effect="blur"
                  loading="lazy"
                  decoding="async"
                  alt="location"
                  src={location}
                  className="rounded-2xl"
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ContactUs;
