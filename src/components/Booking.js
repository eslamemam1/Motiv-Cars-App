import React from "react";
import icon from "../Pictures/icon.svg";
import filter from "../Pictures/filter.svg";
import BookingCar1 from "./Booking Cars/BookingCar1";
import BookingCar2 from "./Booking Cars/BookingCar2";
import BookingCar3 from "./Booking Cars/BookingCar3";
import BookingCar4 from "./Booking Cars/BookingCar4";
import BookingCar5 from "./Booking Cars/BookingCar5";
import BookingCar6 from "./Booking Cars/BookingCar6";
import BookingCar7 from "./Booking Cars/BookingCar7";
import BookingCar8 from "./Booking Cars/BookingCar8";
import BookingCar9 from "./Booking Cars/BookingCar9";

function Booking() {
  return (
    <div className="bg-[#F5F5F5] w-full h-[90vh] overflow-auto">
      <div className=" w-[90%] m-auto relative">
        <h2 className=" font-[700] text-[30px] text-[#242731] absolute top-[30px]">
          Booking
        </h2>
        <div className=" flex flex-wrap justify-between w-full absolute top-[109px]">
          {/** Dropdown Menu */}
          <div className=" flex pb-3">
            <select
              className=" w-[122px] h-[36px] rounded-[10px] text-[#5F6165]"
              name="cars"
            >
              <option value="volvo">New</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <select
              className=" w-[122px] h-[36px] rounded-[10px] text-[#5F6165] ml-[16px]"
              name="cars"
            >
              <option value="Toyota">Toyota</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          {/** imges */}
          <div className=" flex">
            <img className="w-[44px] h-[44px] " src={icon} alt="icon" />
            <img
              className="w-[40px] h-[40px] ml-[16px] "
              src={filter}
              alt="filter"
            />
          </div>
        </div>
        <div className=" w-full">
        <div className=" flex flex-wrap justify-center lg:justify-start gap-5 absolute top-[220px] sm:top-[175px] pb-10 ">
          {/** Car Cars */}
          <BookingCar1 />
          <BookingCar2 />
          <BookingCar3 />
          <BookingCar4 />
          <BookingCar5 />
          <BookingCar6 />
          <BookingCar7 />
          <BookingCar8 />
          <BookingCar9 />
          {/** end of Car Cards */}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
