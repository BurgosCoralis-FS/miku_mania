/*
  Copyright (C), 2023-2024, Sara Echeverria (bl33h)
  Author: Sara Echeverria
  FileName: Loader.jsx
  Version: I
  Creation: 02/06/2023
  Last modification: 04/27/2024
*/

import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-primary-400 text-xl"
      >
        KC
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
