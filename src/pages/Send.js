import React from "react";
import { Navbar, Welcome } from "../components";

const Send = () => {
  return (
    <div>
      {" "}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
};

export default Send;
