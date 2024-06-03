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