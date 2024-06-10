
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

const Characters = () => {
  return (
    <div id="characters" className="w-full overflow-hidden flex justify-center">
      <div className="w-full min-h-[800px] xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-auto mb-10">
          <SectionTitle title="CHARACTERS" subtitle="Vocaloid" />
        </div>
        <div className="w-full z-10 flex justify-center">
          <div className="w-full xl:w-[70%]">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;