import React from 'react'
import CarStatistics from './CarStatistics'
import MilesStatistics from './MilesStatistics'

function Statistics() {
    return (
        <div className=" flex flex-wrap gap-[20px] mt-5 ">
            <div className=' w-[488px] h-[332px] bg-white rounded-[14px]'>
                <MilesStatistics/>
            </div>
            <div className=' w-[488px] h-[332px] bg-white rounded-[14px]'>
                <CarStatistics/>
            </div>
        </div>
    )
}

export default Statistics