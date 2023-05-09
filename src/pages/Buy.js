import React from "react";
import { EasyBuy, Navbar } from "../components";

const Buy = () => {
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <div className="gradient-bg-welcome">
        <Navbar />
        <EasyBuy />
      </div>
    </div>
  );
};

export default Buy;
