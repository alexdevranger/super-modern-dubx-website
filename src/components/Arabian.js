import React from "react";
import arLogo from "../images/ar-logo_optimized.webp";

function Arabian() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex-1 flex flex-col justify-start items-center">
          <img src={arLogo} alt="logo" className="" />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1
            className="text-3xl sm:text-5xl py-2 font-bold"
            style={{ fontWeight: "700!important" }}
          >
            About
            <br />
            ArabianChain Technology
          </h1>
          <h3 className="text-white text-3xl my-4">
            It is the first public, decentralized and consensus-driven
            blockchain in the MENA region
          </h3>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            Arabianchain Technology is a Bahrain based venture that is unlocking
            the potential of tomorrow’s economy by enabling today’s blockchain
            innovation.
          </p>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            It allows for self-executing and globally accessible smart contracts
            and decentralized Apps to be developed, and for digital tokens to be
            transacted, tracked and safeguarded over a network of thousands of
            connected yet distributed devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Arabian;
