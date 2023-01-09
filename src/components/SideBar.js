import React from 'react'
import Logo from "../Pictures/Logo.svg"
import dashboardIcon from "../Pictures/dashboardIcon.svg"
import Assets from "../Pictures/Assets.svg"
import Booking from "../Pictures/Booking.svg"
import SellCars from "../Pictures/SellCars.svg"
import buyCars from "../Pictures/buyCars.svg"
import Services from "../Pictures/Services.svg"
import Calender from "../Pictures/Calender.svg"
import Messages from "../Pictures/Messages.svg"
import "../App.css"
function SideBar() {
  return (
    <div className=' w-[248px] h-full pl-[24px] pt-[30px] bg-[#FFFFFF] flex flex-col'>
      {/* Logo */}
      <div className=' w-[108.91px] h-[31px] relative flex'>
        <div className='w-[26.91px] h-[26.58px] bg-[#A162F7] rounded-[6px] absolute top-[2.08px]'>
          <img src={Logo} alt="logo" className='logoMotiv w-[16.91px] h-[13.63px] bg-cover' />
        </div>
        <div className=' absolute w-[70px] h-[31px] font-[700] text-[24px] leading-[31.25px] left-[38.91px] text-[#1F2128]'>Motiv.</div>
      </div>
      {/** contents */}
      <div>
        <ul className=' text-[#5F6165] relative top-[35px] gap-[10px] flex flex-col justify-evenly'>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={dashboardIcon} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Dashboard</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={Assets} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Assets</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={Booking} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Booking</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={SellCars} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Sell Cars</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={buyCars} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Buy Cars</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={Services} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Services</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={Calender} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Calender</span>
          </li>
          <li className=' flex w-[174px] h-[34px] '>
            <img className=' w-[20px] h-[20px] mt-[6px] ml-[9.67px]' src={Messages} alt="Dashboard" />
            <span className='font-[500] text-[14px] leading-[34px] ml-[8px]' >Messages</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar