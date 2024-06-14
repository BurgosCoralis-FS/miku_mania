import { m, LazyMotion, domAnimation } from "framer-motion";
import { heroVideo } from "../assets";
import { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            
          })
          .catch((error) => {
            console.log("Autoplay prevented: ", error);
            video.muted = true;
            video.play();
          });
      }
    }
  }, []);
  
  return (
    <div className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]" id="repulse-div">
      <LazyMotion features={domAnimation} strict>
        <div className="relative w-screen h-screen overflow-hidden">
          <m.video autoPlay muted loop className="absolute top-0 left-0 w-screen h-screen object-cover">
            <m.source src={heroVideo} type="video/mp4" />
          </m.video>
        </div>
      </LazyMotion>
    </div>
  );
};

export default HeroVideo;
