import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { Chrono } from "react-chrono";
import data from "../utils/roadmapData";

const Roadmap = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 mt-20">
      <div className="flex flex-col justify-start items-center m-auto">
        <h1 className="text-3xl sm:text-5xl py-2 font-bold text-center mb-20">
          Roadmap
        </h1>
        <div style={{ height: "70vh" }}>
          <Chrono
            items={data}
            mode="VERTICAL_ALTERNATING"
            slideShow
            theme={{
              primary: "#1af9ec",
              secondary:
                "linear-gradient(92.23deg, rgb(245 202 243) 21.43%, rgb(226, 168, 249) 50.63%, rgb(176, 221, 243) 100%, rgb(90, 122, 237) 117.04% )",
              cardBgColor:
                "linear-gradient(92.23deg, rgb(245 202 243) 21.43%, rgb(226, 168, 249) 50.63%, rgb(176, 221, 243) 100%, rgb(90, 122, 237) 117.04% )",
              titleColor: "white",
            }}
            cardWidth={650}
            cardHeight={100}
            scrollable={{ scrollbar: false }}
            contentDetailsHeight={0}
            fontSizes={{
              title: "1rem",
            }}
            classNames={{
              card: "roadmap-card",
              cardTitle: "roadmap-card-title",
              controls: "roadmap-controls",
              title: "roadmap-title",
              cardText: "roadmap-card-text",
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Roadmap;
