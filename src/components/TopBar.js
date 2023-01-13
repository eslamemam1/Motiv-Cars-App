import React from 'react'
import Search from "../Pictures/Search.svg"
import Rectangle2 from "../Pictures/Rectangle2.svg"
import notification from "../Pictures/notification.svg"
import picBar from "../Pictures/picBar.png"
function TopBar() {
  return (
      <div className=' w-full h-[10vh] bg-[#FFFFFF]'>
          <div className=' flex justify-between items-center h-[10vh] w-[90%] m-auto'>
            { /** search bar */ }
            <div class="relative">
                <input type="search" placeholder='Search or type' className=' w-[180px] sm:w-[300px] h-[40px] bg-[#F5F4F6] rounded-[8px] pl-[40px] text-[#7C7C8D] text-[16px] font-[500] ' />
                  <img className=' w-[20px] h-[20px] absolute top-[10px] left-[10px] ' src={Search} alt="Search" />
                  <img className=' w-[20px] h-[20px] absolute top-[10px] left-[25px] ' src={Rectangle2} alt="Rectangle2" />
              </div>
              { /** img */ }
              <div className=' flex justify-between items-center h-[40px] w-[80px]'>
                  <img className=' w-[20px] h-[20px]  ' src={notification} alt=" notification" />
                  <img className=' w-[40px] h-[40px] rounded-full  ' src={picBar} alt="picBar" />
              </div>
          </div>
      </div>
  )
}

export default TopBar