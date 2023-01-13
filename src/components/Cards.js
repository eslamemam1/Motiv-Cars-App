import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressBar2 from "./ProgressBar2";
import ProgressBar3 from "./ProgressBar3";
import ProgressBar4 from "./ProgressBar4";
import Energy from "../Pictures/Energy.svg";
import Range from "../Pictures/Range.svg";
import BreakFluid from "../Pictures/BreakFluid.svg";
import TireWear from "../Pictures/TireWear.svg";

function Cards() {
  return (
    <div className=" w-full flex flex-wrap gap-[20px] mt-5">
      <div className=" relative w-[232px] h-[266px] bg-[#A162F7] rounded-[14px]">
        <img
          className=" absolute bottom-[205.5px] left-[50%] translate-x-[-50%] w-[38px] h-[38px] "
          src={Energy}
          alt="Energy"
        />
        <div className=" absolute bottom-[164.5px] left-[50%] translate-x-[-50%]">
          <h2 className=" font-[700] text-[24px] text-white ">Energy</h2>
        </div>
        <div className=" absolute bottom-[22.5px] left-[50%] translate-x-[-50%]">
          <ProgressBar />
        </div>
      </div>
      <div className=" relative w-[232px] h-[266px] bg-[#FFFFFF] rounded-[14px]">
        <img
          className=" absolute bottom-[205.5px] left-[50%] translate-x-[-50%] w-[38px] h-[38px] "
          src={Range}
          alt="Range"
        />
        <div className=" absolute bottom-[164.5px] left-[50%] translate-x-[-50%]">
          <h2 className=" font-[700] text-[24px] ">Range</h2>
        </div>
        <div className=" absolute bottom-[22.5px] left-[50%] translate-x-[-50%]">
          <ProgressBar2 />
        </div>
      </div>
      <div className=" relative w-[232px] h-[266px] bg-[#FFFFFF] rounded-[14px]">
        <img
          className=" absolute bottom-[205.5px] left-[50%] translate-x-[-50%] w-[38px] h-[38px] "
          src={BreakFluid}
          alt="BreakFluid"
        />
        <div className=" absolute bottom-[164.5px] left-[50%] translate-x-[-50%]">
          <h2 className=" font-[700] text-[24px] w-[124px] ">Break fluid</h2>
        </div>
        <div className=" absolute bottom-[22.5px] left-[50%] translate-x-[-50%]">
          <ProgressBar3 />
        </div>
      </div>
      <div className=" relative w-[232px] h-[266px] bg-[#FFFFFF] rounded-[14px]">
        <img
          className=" absolute bottom-[205.5px] left-[50%] translate-x-[-50%] w-[38px] h-[38px] "
          src={TireWear}
          alt="TireWear"
        />
        <div className=" absolute bottom-[164.5px] left-[50%] translate-x-[-50%]">
          <h2 className=" font-[700] text-[24px] w-[111px] ">Tire Wear</h2>
        </div>
        <div className=" absolute bottom-[22.5px] left-[50%] translate-x-[-50%]">
          <ProgressBar4 />
        </div>
      </div>
    </div>
  );
}

export default Cards;
