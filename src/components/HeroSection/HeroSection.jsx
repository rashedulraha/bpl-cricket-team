import heroMainImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";

const HeroSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})`, backgroundColor: "black" }}
        className="w-full h-auto  mt-5 md:mt-10 rounded-lg px-4  "
      >
        <div className="py-14 flex  flex-col items-center space-y-3 md:space-y-6 ">
          <figure>
            <img src={heroMainImg} alt="" />
          </figure>
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className=" text-white  text-lg md:text-2xl md:text-zinc-500 font-bold ">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="btn outline-2 font-bold text-lg text-zinc-900 bg-[#E7FE29] outline-[#E7FE29] border-0">
            Claim Free Credit
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
