import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import cubes from "../images/cubes_optimized.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import newlogo from "../images/logo-novi.webp";

const Project = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 my-20">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold flex items-center"
          style={{ fontWeight: "700!important" }}
        >
          What is
          <br />
          Dubxcoin?
          <div className="ml-[20px] w-[100px] sm:ml-[70px] sm:w-[150px]">
            {/* <img
              src={newlogo}
              alt="logo"
              className="w-full"
              style={{ textAlign: "center", margin: "auto" }}
            /> */}
            <LazyLoadImage
              effect="blur"
              loading="lazy"
              decoding="async"
              alt="logo"
              src={newlogo}
              style={{ textAlign: "center", margin: "auto" }}
              className="w-full"
            />
          </div>
        </h1>
        <h3 className="text-white text-3xl my-4">
          It is an open source, community-based project
        </h3>

        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          As one of the most popular blockchain projects, Dubxcoin is driving
          innovation and change across a wide range of industries, from finance
          and healthcare to identity management and supply chain logistics.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          With the goal of building a decentralized, consensus-driven, peer to
          peer, open source, blockchain-based platform for distributed
          applications. ArabianChain tech will leverage and improve blockchain
          technology and build a full-featured application platform on top of
          it.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center pt-[40px]">
        <LazyLoadImage
          effect="blur"
          loading="lazy"
          decoding="async"
          alt="cubes"
          src={cubes}
        />
      </div>
    </div>
  </div>
);

export default Project;
