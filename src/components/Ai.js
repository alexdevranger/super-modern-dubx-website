import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import ai from "../images/ai_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Ai = () => (
  <div className="flex w-full justify-center items-center bg-[#0399DB]">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 my-20">
      <div className="flex-1 flex flex-col justify-start items-center">
        <img src={ai} alt="logo" className="" />
      </div>
      <div className="flex-1 flex flex-col justify-start items-start pl-[50px]">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold"
          style={{ fontWeight: "700!important", color: "#3e3cc3" }}
        >
          AI & Blockchain
        </h1>
        <h3 className="text-white text-3xl my-4">
          We want to train our AI to improve our blockchain
        </h3>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          AI and blockchain are two rapidly advancing technologies that have the
          potential to revolutionize many industries. AI can enhance blockchain
          technologies by enabling more efficient and secure data processing,
          analysis, and decision-making.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Another area where AI can improve blockchain is through predictive
          analysis. By analyzing large amounts of data, AI can help identify
          patterns and trends that can be used to optimize blockchain
          operations.
        </p>
      </div>
    </div>
  </div>
);

export default Ai;
