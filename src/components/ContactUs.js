import React, { useEffect, useRef, useState } from "react";
import location from "../images/newlocation_optimized.webp";
import WaterWave from "react-water-wave";
import { Link } from "react-router-dom";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ContactUs = () => {
  const [webglSupported, setWebglSupported] = useState(false);
  const waterWaveRef = useRef(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl") ||
      canvas.getContext("moz-webgl") ||
      canvas.getContext("webkit-3d");
    const isWebglSupported = !!gl;
    setWebglSupported(isWebglSupported);

    if (!isWebglSupported && waterWaveRef.current) {
      waterWaveRef.current.destroy();
    }
  }, []);
  console.log(webglSupported);
  console.log(waterWaveRef.current);
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
        {/* {webglSupported ? (
          <WaterWave
            ref={waterWaveRef}
            // imageUrl={bgg}
            style={{ width: "100%", height: "100%" }}
            children={() => ( */}
        <div className="flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col min-[300px]:flex-col max-[639px]:flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
          <div className="flex flex-col justify-center items-center xl:w-[70%] lg:w-[80%] w:full md:w-[100%] m-auto sm:w-full">
            <h1 className="text-3xl md:text-5xl py-2 font-bold text-left sm:text-center relative">
              We spread around the globe{" "}
              <BsFillRocketTakeoffFill className="text-white rocket" />
            </h1>
            <h3 className="text-white text-xl sm:text-3xl my-4 underline">
              New Location in Dubai - Marina Gate
            </h3>
            <div className="flex flex-col w-full sm:flex-row items-center justify-evenly mt-[70px]">
              <div className="flex flex-col w-full sm:w-[400px]">
                <h1
                  className="text-3xl sm:text-4xl py-2 font-bold text-center"
                  style={{ fontWeight: "700!important" }}
                >
                  <span className="text-white">NEW OFFICE</span>
                </h1>
                <div className="white-glassmorphism p-10">
                  <h3 className="text-white text-3xl my-4 underline text-center">
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
              </div>
              <div className="flex flex-col justify-start items-center w-[300px] pt-2">
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
            <h1
              className="flex flex-row items-center justify-center text-2xl sm:text-3xl py-2 font-bold text-center mt-10"
              style={{ fontWeight: "700!important" }}
            >
              <span>CONTACT US</span>
              <span className="text-white ml-4">
                <Link to="/contact">
                  <BiLinkExternal className="text-white" />
                </Link>
              </span>
            </h1>
          </div>
        </div>
        {/* )}
          />
        ) : (
          <p>
            WebGL is not supported on your device. The water wave effect is
            disabled.
          </p>
        )} */}
      </div>
    </div>
  );
};

export default ContactUs;
