import React, { useState, useEffect } from "react";
import aboutus from "../images/about_optimized.webp";
import WaterWave from "react-water-wave";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import newlogo from "../images/logo-novi.webp";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div style={{ width: "100%", minHeight: "93vh", overflow: "hidden" }}>
      {/* <WaterWave
        style={{ width: "100%", height: "100%" }}
        children={() => ( */}
      <div className="flex flex-col w-full justify-center items-center mt-28 py-12">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold text-center"
          style={{ fontWeight: "700!important" }}
        >
          CONTACT OUR TEAM 24/7
        </h1>
        <div className="flex flex-col md:flex-row items-center w-full justify-evenly md:p-10 py-12 px-4 lg:w-[60%]">
          <div className="flex flex-col justify-start items-center">
            <div className="background white-glassmorphism">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-white text-xl sm:text-2xl my-4">
                  Send us a message
                </h3>
                <div className="screen">
                  <div className="screen-body">
                    <div className="screen-body-item">
                      <div className="app-form">
                        <form
                          action="https://getform.io/f/94e17b34-0e44-454d-8091-6870f40224f2"
                          method="POST"
                        >
                          <div className="app-form-group">
                            <input
                              className="app-form-control uppercase"
                              placeholder="NAME"
                              type="text"
                              name="fullname"
                              value={fullname}
                              onChange={(e) => setFullname(e.target.value)}
                            />
                          </div>
                          <div className="app-form-group">
                            <input
                              className="app-form-control"
                              placeholder="EMAIL"
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="app-form-group message">
                            <input
                              className="app-form-control"
                              placeholder="MESSAGE"
                              type="text"
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                            />
                          </div>
                          <input
                            type="hidden"
                            name="_gotcha"
                            style={{ display: "none !important" }}
                          />
                          <div className="buttons text-center">
                            <button
                              type="submit"
                              className="mx-4 my-8 bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold"
                            >
                              SEND
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-left">
            <h3 className="text-white text-xl sm:text-2xl my-4 flex flex-row items-center">
              <SlLocationPin className="mr-2 text-[50px]" /> Kingdom of Bahrain
            </h3>
            <p className="text-white ml-[59px]">Office no 302,</p>
            <p className="text-white ml-[59px]">Building 551, Road 4612,</p>
            <p className="text-white ml-[59px]">Block 346, Manama-Water Bay</p>
            <h3 className="text-white text-xl sm:text-2xl my-4 flex flex-row items-center mt-4">
              <SlLocationPin className="mr-2 text-[50px]" />
              Dubai, UAE
            </h3>
            <p className="text-white ml-[59px]">Jumeirah Living,</p>
            <p className="text-white ml-[59px]">Marina Gate,</p>
            <p className="text-white ml-[59px]">M Floor, Dubai Marina</p>
            <h3 className="text-white text-xl sm:text-xl my-4 flex flex-row items-center mt-4">
              <SlEnvolope className="mr-5 text-[40px]" />
              info@arabianchain.org
            </h3>
          </div>
        </div>
        <div
          className="flex flex-row md:flex-row items-center w-full justify-evenly md:p-10 py-12 px-4 lg:w-[50%] bs rounded-lg"
          style={{ border: "1px solid #2a2a2a" }}
        >
          <a href="https://github.com/DUBXCOIN/go-dubxcoin" target="_blank">
            <FaGithub className="mr-2 text-[50px] text-white" />
          </a>
          <a href="https://twitter.com/arabianchaintec" target="_blank">
            <FaTwitter className="mr-2 text-[50px] text-white" />
          </a>
          <a href="https://web.telegram.org/k/#@DUBXCOIN_GROUP" target="_blank">
            <FaTelegramPlane className="mr-2 text-[50px] text-white" />
          </a>
        </div>
      </div>
      {/* )}
      /> */}
    </div>
  );
};

export default ContactForm;
