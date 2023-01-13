import React from "react";
import Vector from "../Pictures/Vector.svg";
import Vector2 from "../Pictures/Vector2.svg";
import Vector3 from "../Pictures/Vector3.svg";
import Vector4 from "../Pictures/Vector4.svg";
import Car from "../Pictures/car.png";
import Car2 from "../Pictures/Car2.png";
import Car3 from "../Pictures/Car3.png";
function CarCards() {
  return (
    <div className=" h-[320px] flex flex-wrap gap-[20px] mt-5">
      <div className=" w-[318px] h-[236px] rounded-[14px] bg-[#E1DFA4] relative">
        <div className=" flex w-[170px] h-[24px] absolute top-[15px] left-[29px]">
          <img className="w-[20px] h-[20px] " src={Vector} alt="Vector" />
          <p className=" w-[150px] font-[700] text-[16px] text-[#242731] pl-[11px]">
            64% Recommend
          </p>
        </div>
        <img
          className="w-[257px] h-[106px] absolute top-[50px] left-[27px] "
          src={Car}
          alt="Car"
        />
        <div className=" absolute top-[167px] left-[27px]">
          <h3 className=" text-[#1F2128] font-[700] text-[20px]">
            Mini Cooper
          </h3>
          <div className=" flex h-[20px] w-[257px] mt-[5px]">
            <img className="w-[20px] h-[20px] " src={Vector2} alt="Vector" />
            <p className=" text-[#72767C] text-[14px] font-[500] w-[30px] ml-[17.67px]">
              132K
            </p>
            <img
              className="w-[20px] h-[20px] ml-[17.33px] "
              src={Vector3}
              alt="Vector"
            />
            <img
              className="w-[20px] h-[20px] ml-[19.97px] "
              src={Vector4}
              alt="Vector"
            />
            <p className=" text-[#72767C] text-[14px] font-[500] absolute right-0">
              $32/h
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[318px] h-[236px] rounded-[14px] bg-[#E3ECF1] relative">
        <div className=" flex w-[170px] h-[24px] absolute top-[15px] left-[29px]">
          <img className="w-[20px] h-[20px] " src={Vector} alt="Vector" />
          <p className=" w-[150px] font-[700] text-[16px] text-[#242731] pl-[11px]">
            74% Recommend
          </p>
        </div>
        <img
          className="w-[247.15px] h-[106px] absolute top-[50px] left-[27px] "
          src={Car2}
          alt="Car2"
        />
        <div className=" absolute top-[167px] left-[27px]">
          <h3 className=" text-[#1F2128] font-[700] text-[20px]">
            Porsche 911 Carrera
          </h3>
          <div className=" flex h-[20px] w-[257px] mt-[5px]">
            <img className="w-[20px] h-[20px] " src={Vector2} alt="Vector" />
            <p className=" text-[#72767C] text-[14px] font-[500] w-[30px] ml-[17.67px]">
              130K
            </p>
            <img
              className="w-[20px] h-[20px] ml-[17.33px] "
              src={Vector3}
              alt="Vector"
            />
            <img
              className="w-[20px] h-[20px] ml-[19.97px] "
              src={Vector4}
              alt="Vector"
            />
            <p className=" text-[#72767C] text-[14px] font-[500] absolute right-0">
              $28/h
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[318px] h-[236px] rounded-[14px] bg-[#F4E3E5] relative">
        <div className=" flex w-[170px] h-[24px] absolute top-[15px] left-[29px]">
          <img className="w-[20px] h-[20px] " src={Vector} alt="Vector" />
          <p className=" w-[150px] font-[700] text-[16px] text-[#242731] pl-[11px]">
            64% Recommend
          </p>
        </div>
        <img
          className="w-[216.57px] h-[106px] absolute top-[50px] left-[27px] "
          src={Car3}
          alt="Car3"
        />
        <div className=" absolute top-[167px] left-[27px]">
          <h3 className=" text-[#1F2128] font-[700] text-[20px]">
            Porsche 911 Carrera
          </h3>
          <div className=" flex h-[20px] w-[257px] mt-[5px]">
            <img className="w-[20px] h-[20px] " src={Vector2} alt="Vector" />
            <p className=" text-[#72767C] text-[14px] font-[500] w-[30px] ml-[17.67px]">
              132K
            </p>
            <img
              className="w-[20px] h-[20px] ml-[17.33px] "
              src={Vector3}
              alt="Vector"
            />
            <img
              className="w-[20px] h-[20px] ml-[19.97px] "
              src={Vector4}
              alt="Vector"
            />
            <p className=" text-[#72767C] text-[14px] font-[500] absolute right-0">
              $32/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCards;
