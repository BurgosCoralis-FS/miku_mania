/*
  Copyright (C), 2023-2024, Sara Echeverria (bl33h)
  Author: Sara Echeverria
  FileName: Hero.jsx
  Version: I
  Creation: 02/06/2023
  Last modification: 04/27/2024
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroVideo from "../Components/HeroVideo";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HeroVideo />
      </m.div>
    </LazyMotion>
    </div>
  );
};

export default Hero;
