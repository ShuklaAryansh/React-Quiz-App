// import React, { useEffect, useState } from 'react'
// import { que } from './que.js'

// export const Questions = ( { score, SetSecore, SetIsOver}) => {
//     let [QueIdx, updateQueIdx] = useState(0);
    
//     const size = que.length;
      
//     return (    
//     <>
//         <div className='flex flex-col text-center gap-2 h-[50vh] text-4xl w-[35%]'>
        
//         <div className='text-[2rem]'>{que[QueIdx].Q }</div>
//         <div className='flex flex-col '>
//             {que[QueIdx].Options.map((Option , index)=>{ return <button className='px-2 p-2 bg-red-500 border-2 border-amber-50 rounded-[8px] mb-2 ' key={index} 
//             onClick={ ()=>{
//                 if(que[QueIdx].Answer === Option){
//                     SetSecore(()=>score + 1)
//                 }

//                 if(QueIdx < (size - 1) ){
//                     updateQueIdx(()=>QueIdx + 1)
//                 }
//                 else{
                    
//                     SetIsOver(()=> {return true})
//                 }
//             }}  >{Option}</button>})}
//         </div>
        
//     </div>
//     </>
//   )
// }
import React, { useState } from 'react'
import { que } from './que.js'

export const Questions = ( { score, SetSecore, SetIsOver}) => {
    
    const [QueIdx, updateQueIdx] = useState(0);
    
    
    const size = que.length;
    const currentQuestion = que[QueIdx];
      
    
    const handleOptionClick = (selectedOption) => {
    
        if(currentQuestion.Answer === selectedOption){
    
            SetSecore(prevScore => prevScore + 1);
        }

    
        if(QueIdx < (size - 1) ){
    
            updateQueIdx(prevIdx => prevIdx + 1);
        } else {
    
            SetIsOver(true);
        }
    }
      
    return (    
        <>
            <div className='flex flex-col text-center gap-6 w-full'>
            
                {}
                <div className='text-lg font-medium text-blue-400'>
                    Question {QueIdx + 1} of {size}
                </div>
            
                {}
                <div className='text-2xl font-bold text-white mb-6'>{currentQuestion.Q }</div>
            
                {}
                <div className='flex flex-col gap-4'>
                    {currentQuestion.Options.map((Option , index)=>{ 
                        return (
                            <button 
                                key={index}
                 
                                className='p-4 bg-cyan-600 text-white text-xl font-semibold rounded-lg shadow-lg transition duration-200 ease-in-out 
                                           hover:bg-cyan-500 hover:shadow-cyan-500/50 hover:scale-[1.02]
                                           active:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/50'
                                onClick={() => handleOptionClick(Option)} 
                            >
                                {Option}
                            </button>
                        )
                    })}
                </div>
              
                {}
                <div className='text-xl font-semibold text-gray-400 mt-6'>
                    Score: <span className='text-teal-400'>{score}</span>
                </div>
            
            </div>
        </>
    )
}