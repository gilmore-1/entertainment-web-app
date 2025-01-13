import Tranding1 from "../../public/tranding1.png";
import { MdMovieCreation } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";

const Trending = () => {
  return (
    <div className="flex-col items-center mt-9">
      <h3 className="font-outfit text-2xl font-normal leading-normal tracking-[-0.5px] text-white">
        Trending
      </h3>
      <div className="w-full flex  space-x-10 mt-7">
        <div className="w-[470px]  relative">
          <img src={Tranding1} className="relative" alt="" />
          <div className="absolute top-5 right-5">
            <CiBookmark size={30} />
          </div>
          <div className="absolute bottom-5 left-5 font-bold space-y-1">
            <div className="flex items-center gap-2 font-outfit text-sm-text font-normal leading-normal">
              <span>2019</span>
              <MdMovieCreation />
              Movie
              <span>PG</span>
            </div>
            <h1 className="font-outfit text-lg font-normal leading-normal text-white">
              Beyond Earth
            </h1>
          </div>
        </div>
        <div className="w-[470px]  relative">
          <img src={Tranding1} className="relative" alt="" />
          <div className="absolute top-5 right-5">
            <CiBookmark size={30} />
          </div>
          <div className="absolute bottom-5 left-5 font-bold space-y-1">
            <div className="flex items-center gap-2 font-outfit text-sm-text font-normal leading-normal">
              <span>2019</span>
              <MdMovieCreation />
              Movie
              <span>PG</span>
            </div>
            <h1 className="font-outfit text-lg font-normal leading-normal text-white">
              Beyond Earth
            </h1>
          </div>
        </div>
        <div className="w-[470px]  relative">
          <img src={Tranding1} className="relative" alt="" />
          <div className="absolute top-5 right-5">
            <CiBookmark size={30} />
          </div>
          <div className="absolute bottom-5 left-5 font-bold space-y-1">
            <div className="flex items-center gap-2 font-outfit text-sm-text font-normal leading-normal">
              <span>2019</span>
              <MdMovieCreation />
              Movie
              <span>PG</span>
            </div>
            <h1 className="font-outfit text-lg font-normal leading-normal text-white">
              Beyond Earth
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
