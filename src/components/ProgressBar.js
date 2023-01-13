import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React from 'react'

function ProgressBar() {
    const percentage = 45;
    return (
        <div className=' font-[700]'>
            <CircularProgressbar className=' w-[112px] h-[112px] relative'
                value={percentage}
                circleRatio={0.78}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.6,
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                    // Colors
                    
                    pathColor: `#ffffff`,
                    trailColor: '#B37EFC',
                    backgroundColor: '#3e98c7',
                })}
            />
            <p className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#ffffff] text-[24px]'>{percentage}%</p>
        </div>
    )
}

export default ProgressBar