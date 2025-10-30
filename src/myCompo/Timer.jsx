import React, { useEffect, useState } from 'react'


export const Timer = ({SetIsOver}) => {
    const [time,setTime] = useState(10);
    const [displayTime,setdisplayTime] = useState('');
    
    
useEffect(() => {
    
    
    if (time > 0) {
        const intervalId = setInterval(() => {
            
            setTime(prevTime => prevTime - 1);
        }, 1000);

        
        return () => clearInterval(intervalId);
    } 
    
    
    if (time <= 0) {
        SetIsOver(true);
    }
        
}, [time, SetIsOver]);

    
    useEffect(()=>{       
        let showTime = (`${Math.floor(time/60).toString().padStart(2,'0')} : ${(time%60).toString().padStart(2,'0')}`);
        
        
        setdisplayTime(showTime);
        
            

    },[time]);

  return (
    
    <div className='text-center'>      
      <div className='text-5xl font-extrabold tracking-widest text-red-500 animate-pulse'>
        ⏱️ {displayTime}
      </div>
      <div className='text-sm text-gray-500 mt-1'>Time Remaining</div>
    </div>
    
  )
}