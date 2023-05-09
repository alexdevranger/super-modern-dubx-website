import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import newlogo from "../images/logo-novi.png";
import WaterWave from "react-water-wave";

const EasyBuy = () => {
  return (
    <div style={{ width: "100%", minHeight: "93vh", overflow: "hidden" }}>
      <WaterWave
        style={{ width: "100%", height: "100%" }}
        children={() => (
          <div className="flex w-full justify-center items-center">
            <div className="flex flex-col items-center justify-center md:p-20 py-12 px-4 mt-20">
              <div className="flex flex-col justify-start items-center">
                <h1
                  className="text-3xl sm:text-5xl py-2 font-bold text-center"
                  style={{ fontWeight: "700!important" }}
                >
                  Easy BUY DUBX
                </h1>
                <h3 className="text-white text-xl sm:text-2xl my-4">
                  Fill the form and you will get the offer
                </h3>
                <div className="background white-glassmorphism">
                  <div className="flex flex-col justify-center items-center">
                    <div className="screen">
                      <div className="screen-body">
                        <div className="screen-body-item left">
                          <h1 className="text-2xl py-2 font-bold text-center m-0">
                            DUBX PRESALE
                          </h1>

                          <div className="flex flex-col justify-center items-center w-[200px] h-[200px]">
                            <LazyLoadImage
                              effect="blur"
                              loading="lazy"
                              decoding="async"
                              alt="newlogo"
                              src={newlogo}
                              width="100%"
                            />
                          </div>
                          <div className="app-contact">
                            CONTACT INFO : info@arabianchain.org
                          </div>
                        </div>
                        <div className="screen-body-item">
                          <div className="app-form">
                            <div className="app-form-group">
                              <input
                                className="app-form-control"
                                placeholder="NAME"
                              />
                            </div>
                            <div className="app-form-group">
                              <input
                                className="app-form-control"
                                placeholder="EMAIL"
                              />
                            </div>
                            <div className="app-form-group">
                              <input
                                className="app-form-control"
                                placeholder="AMOUNT DUBX"
                              />
                            </div>
                            <div className="app-form-group message">
                              <input
                                className="app-form-control"
                                placeholder="MESSAGE"
                              />
                            </div>
                            <div className="app-form-group buttons">
                              <button className="mx-4 my-8 bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold">
                                SEND
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default EasyBuy;
