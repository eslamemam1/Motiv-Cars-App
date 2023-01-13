import React from "react";
import loveIcon from "../../Pictures/loveIcon.svg";
import whiteCar from "../../Pictures/whiteCar.png";
import VectorUser from "../../Pictures/VectorUser.svg";
import VectorUser2 from "../../Pictures/VectorUser2.svg";

function BookingCar3() {
  return (
    <div className=" relative w-[325px] h-[267px] rounded-[16px] bg-[#FFFFFF]">
      <div className=" w-[277px] m-auto">
        <div className=" flex justify-between items-center absolute top-[24px] w-[277px] ">
          <p className=" w-[184px] text-[18px] text-[#242731] font-[700]">
            Porshe 718 Cayman S
          </p>
          <img
            className="w-[20px] h-[17.82px] "
            src={loveIcon}
            alt="loveIcon"
          />
        </div>
        <p className=" font-[400] text-[16px] text-[#72767C] absolute top-[52px]">
          Coupe
        </p>
        <img
          className="w-[269px] h-[115px] absolute top-[94px] left-[46px] "
          src={whiteCar}
          alt="whiteCar"
        />
        <div className=" flex absolute top-[221px] w-[277px] h-[23px]">
          <div className=" h-[23px] w-[277px] relative flex justify-between">
            {/** left */}
            <div className=" flex w-[131px] h-[23px] justify-between">
              <div className=" flex w-[35px] h-[23px] justify-between">
                <img
                  className="w-[20px] h-[22px]  "
                  src={VectorUser}
                  alt="VectorUser"
                />
                <p className=" font-[400] text-[18px] text-[#72767C]  ">4</p>
              </div>
              <div className=" flex w-[78px] h-[21px] justify-between">
                <img
                  className="w-[20px] h-[22px]  "
                  src={VectorUser2}
                  alt="VectorUser2"
                />
                <p className=" font-[400] text-[18px] text-[#72767C] ml-[6.7px] ">
                  Manual
                </p>
              </div>
            </div>
            <p className=" font-[700] text-[#242731] text-[18px]">
              $400<span className=" text-[#72767C] font-[500]">/d</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCar3;
