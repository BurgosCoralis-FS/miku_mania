/*
  Copyright (C), 2023-2024, Sara Echeverria (bl33h)
  Author: Sara Echeverria
  Edited by: Cora (kiricora)
  FileName: HeroVideo.jsx
  Version: I
  Creation: 02/06/2023
  Last modification: 04/27/2024
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroVideo = () => {
  return (
    <div className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]" id="repulse-div">
      <LazyMotion features={domAnimation} strict>
        <div className="relative w-screen h-screen overflow-hidden">
          <m.video autoPlay muted loop className="absolute top-0 left-0 w-screen h-screen object-cover">
            <m.source src="/src/assets/video/【AMV】HatsuneMiku_FASHION4K60FPS」.mp4" />
          </m.video>
        </div>
      </LazyMotion>
    </div>
  );
};

export default HeroVideo;

 {/* <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        > */}
          
          {/* <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Who's{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div> */}
        {/* </m.h1> */}