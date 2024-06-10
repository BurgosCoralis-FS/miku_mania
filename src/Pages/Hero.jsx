import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroVideo from "../Components/HeroVideo";
import HeroScroller from "../Components/elements/HeroScroller";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="hero"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
          style={{ zIndex: 1 }}
        >
          <HeroVideo />
        </m.div>
        <HeroScroller style={{ zIndex: 2 }} /> 
      </LazyMotion>
    </div>
  );
};

export default Hero;