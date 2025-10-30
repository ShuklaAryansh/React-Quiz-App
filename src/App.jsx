import React , {useState} from 'react'
import { Timer } from './myCompo/Timer'
import { Questions } from './myCompo/questions'

export default function App(){  
  
  let [score, setScore] = useState(0); 
  let [isOver, setIsOver] = useState(false);

  return (
    
    <div className='min-h-screen w-full bg-gray-900 flex flex-col justify-center items-center p-4'>      
      
      {}
      <div className='w-full max-w-xl p-8 bg-gray-800 rounded-xl shadow-2xl border border-blue-900/50'> 
        
        {}
        <div className='mb-8 text-center'>
          {
            isOver 
            ? <div className='text-3xl font-extrabold text-red-500 tracking-wider animate-pulse'>
                ⏱️ TIME UP!
              </div> 
            : <Timer SetIsOver={setIsOver}/>
          }
        </div>
        
        {}
        {
          ( isOver 
            ? <div className='mt-10 text-center'>
                <div className='text-4xl font-extrabold text-teal-400'>
                  ✨ GAME OVER ✨
                </div>
                <div className='text-6xl font-black mt-4 text-white'>
                  FINAL SCORE: {score}
                </div>
              </div> 
            : <Questions score={score} SetSecore={setScore} SetIsOver={setIsOver}/> 
          )
        }
        
      </div>
    </div>
  )
}