import React from "react";

import logo from "../images/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-[100px]">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          decoding="async"
          alt="logo"
          src={logo}
          className="w-32"
        />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <div className="text-white text-base text-left mx-2 cursor-pointer">
          <a href="https://explorer.arabianchain.org/#/" target="_blank">
            <p>Explorer</p>
          </a>
          <a href="https://galaxy.arabianchain.org" target="_blank">
            <p>Galaxy Wallet</p>
          </a>
          <a href="https://arabianchain.org/" target="_blank">
            <p>Website</p>
          </a>
          <a href="https://arabianchain.org/" target="_blank">
            <p>Desktop Wallet</p>
          </a>
        </div>
        <div className="text-white text-base text-left mx-2 cursor-pointer">
          <a href="http://dubxpool.arabianchain.org/" target="_blank">
            <p>Pool</p>
          </a>
          <a href="http://dubx.krokipool.pro/#/" target="_blank">
            <p>Kroki Pool</p>
          </a>
          <a href="https://github.com/DUBXCOIN" target="_blank">
            <p>Github</p>
          </a>
          <a href="https://twitter.com/arabianchaintec" target="_blank">
            <p>Twitter</p>
          </a>
        </div>
        <div className="text-white text-base text-left mx-2 cursor-pointer">
          <p>Office no 302,</p>
          <p>Building 551, Road 4612,</p>
          <p>Block 346, Manama-Water Bay,</p>
          <p>Kingdom of Bahrain</p>
        </div>
        {/* <div className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </div> */}
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@arabianchain.org
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@arabianchain2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
