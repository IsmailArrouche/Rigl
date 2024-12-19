import React from "react";
import Picture from "./Picture";
import Status from "./Status";
import Buttons from "./Buttons";

function Welcome() {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center">
      <Picture />
      <Status />
      <Buttons />
    </div>
  );
}

export default Welcome;
