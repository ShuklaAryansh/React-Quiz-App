
import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import axios from 'axios'; // 2. Import axios (you must install it: npm install axios)

// Assuming your API endpoint looks something like this:
const API_URL = 'Put Your own question api';

export const Questions = ({ score, SetSecore, SetIsOver }) => {

    // --- NEW STATE FOR ASYNCHRONOUS DATA ---
    const [questions, setQuestions] = useState([]); // Array to hold fetched questions
    const [loading, setLoading] = useState(true);   // Tracks if fetching is in progress
    const [error, setError] = useState(null);      // Stores any error message
    // ------------------------------------------

    const [QueIdx, updateQueIdx] = useState(0);

    // --- useEffect FOR API CALL ---
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                //just adding one new question for testiong purpose
                // const addup = await axios({
                //     url: 'put your own question api url',
                //     method:'post',
                //     data:{
                //         Q:'Tell Me Your Name',
                //         Options: ['Madhav',"Gopal","Aryansh","Aavi"],
                //         Answer:'Aryansh',
                //         id:5
                //     }
                // })
                //console.log(addup.data);
                // Use axios.get to fetch the data
                const response = await axios.get(API_URL);
                
                // Assuming your API returns the questions array directly
                setQuestions(response.data); 
                
            } catch (err) {
                // Handle any network or request errors
                setError('Failed to fetch questions. Please check the API URL.');
                console.error("API Fetch Error:", err);
            } finally {
                // Set loading to false once the operation is complete (success or fail)
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []); // Empty dependency array means this runs only ONCE after initial render
    // ----------------------------------

    // --- LOGIC DEPENDS ON FETCHED DATA ---
    
    // Check if questions array is empty (due to error or just no data)
    if (loading) {
        return <div className='text-white text-3xl'>Loading questions...</div>;
    }

    if (error) {
        return <div className='text-red-500 text-3xl'>Error: {error}</div>;
    }

    // After loading and error checks, proceed with the quiz logic
    const size = questions.length;
    
    if (size === 0) {
         return <div className='text-yellow-500 text-3xl'>No questions available.</div>;
    }
    
    const currentQuestion = questions[QueIdx];
    // -------------------------------------

    const handleOptionClick = (selectedOption) => {
        // Use 'currentQuestion' which is derived from the state 'questions'
        if (currentQuestion.Answer === selectedOption) {
            SetSecore(prevScore => prevScore + 1);
        }

        if (QueIdx < (size - 1)) {
            updateQueIdx(prevIdx => prevIdx + 1);
        } else {
            SetIsOver(true);
        }
    }
    
    // --- RENDER BLOCK (Same as before, using currentQuestion) ---
    return (
        <>
            <div className='flex flex-col text-center gap-6 w-full'>
                
                <div className='text-lg font-medium text-blue-400'>
                    Question {QueIdx + 1} of {size}
                </div>
                
                <div className='text-2xl font-bold text-white mb-6'>{currentQuestion.Q}</div>
                
                <div className='flex flex-col gap-4'>
                    {/* Map over the options of the current fetched question */}
                    {currentQuestion.Options.map((Option, index) => {
                        return (
                            <button
                                key={index}
                                className='p-4 bg-cyan-600 text-white text-xl font-semibold rounded-lg shadow-lg transition duration-200 ease-in-out hover:bg-cyan-500 hover:shadow-cyan-500/50 hover:scale-[1.02] active:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-500/50'
                                onClick={() => handleOptionClick(Option)}
                            >
                                {Option}
                            </button>
                        )
                    })}
                </div>
                
                <div className='text-xl font-semibold text-gray-400 mt-6'>
                    Score: <span className='text-teal-400'>{score}</span>
                </div>
                
            </div>
        </>
    )
}