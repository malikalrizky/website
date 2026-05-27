import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tech Lead Senior Security Software Engineer — SOC / DevSecOps / Platform Engineering",
          "Platform Security Engineer",
          "Identity and Detection Engineering"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
