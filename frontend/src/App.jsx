import React from 'react';
import { useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
    let [ques,setQues] = React.useState([
      {"content" :"How satisfied are you with our products?","index" : 1},
      {"content" : "How fair are the prices compared to similar retailers?","index" :2},
      {"content": "How satisfied are you with the value for money of your purchase?","index": 3},
      {"content":"On a scale of 1-10 how would you recommend us to your friends and family?","index" : 4},
      {"content" : "What could we do to improve our service?","index" : 5}
    ]);
    let [currIndex,setCurrIndex] = React.useState(1);
    let [ans,setAns] = React.useState({});
    let [check , setCheck] = React.useState({"welcome" : true,
      "survey" : false,
      "thankyou" : false
    });

    let handleClick = (e)=>{
         setAns({...ans,[currIndex]:e.target.value});
    }
    let handlePrev = ()=>{
        setCurrIndex(currIndex-1);
    }
    let handleNext = () =>{
       setCurrIndex(currIndex+1);
    }
    let handleSubmit = async () =>{
      
       
       if(window.confirm("Are you Ready to Submit")){
        let res = axios.post('http://localhost:5000/',{ans});
       setAns({});
       setCurrIndex(1);
       setCheck({"thankyou" : true});
       }
       
    }

    let handleWelcome = () =>{
      setCheck({"survey" : true})
    }
    
    let mps = ques.map((que)=>{
        return  <div key={que.index} className={currIndex===que.index ? "bg-white h-64  w-full text-black rounded-md p-10 flex items-center justify-center flex-col" : "non-active"} >

          <div className="flex gap-6 items-center">
            <p>{que.index}/{ques.length}</p>
            <p className='text-2xl font-bold'>{que.content}</p>
          </div>



          
          {que.index !==5 && <div className="input-btn p-4 flex flex-row gap-4 mb-4 mt-4">
           <input onClick={handleClick} value={1} type='radio' checked={ans[que.index]=='1' ? true : false} className='h-5 w-5' />
           <input onClick={handleClick} value={2} type='radio' checked={ans[que.index]==='2' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={3} type='radio' checked={ans[que.index]==='3' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={4} type='radio' checked={ans[que.index]==='4' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={5} type='radio' checked={ans[que.index]==='5' ? true : false} className='h-5 w-5'/>
           { que.index===4 && <>
           <input onClick={handleClick} value={6} type='radio' checked={ans[que.index]=='6' ? true : false} className='h-5 w-5' />
           <input onClick={handleClick} value={7} type='radio' checked={ans[que.index]==='7' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={8} type='radio' checked={ans[que.index]==='8' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={9} type='radio' checked={ans[que.index]==='9' ? true : false} className='h-5 w-5'/>
           <input onClick={handleClick} value={10} type='radio' checked={ans[que.index]==='10' ? true : false} className='h-5 w-5'/>
         
           </>

           }
          </div>}
          {que.index===5 && <div className='p-4 mb-4 mt-4 border-black border-solid '>
            <input type="text" name="" id=""  placeholder='write here...' onChange={handleClick} className='h-16  p-4 font-normal text-2xl border-black min-w-full'/>
            </div>}
          <div className="mv-btns">
            {currIndex!==1   && <button onClick={handlePrev} className='bg-blue-600 w-24 rounded-md p-2 text-gray-300 font-bold'>Prev</button>}
           {currIndex!==ques.length && <button onClick={handleNext} className={currIndex===1 ?'bg-blue-600 w-24 rounded-md p-2 text-gray-300 font-bold' :'bg-blue-600 w-24 rounded-md p-2 text-gray-300 font-bold ml-6' }>Next</button>}
           {currIndex===ques.length && <button className='bg-red-600 w-24 rounded-md p-2 text-gray-300 font-bold ml-6' onClick={handleSubmit}>Submit</button>}
          </div>      
        </div>}
  )
  return (
    <>
      <div className="bg-black h-screen text-white w-screen flex flex-col justify-items-center items-center p-10 overflow-hidden">
       {check.survey && <><h1 className="flex justify-items-center items-center text-3xl mb-5">Survey Form</h1>       
        {mps} </> }
        {
          check.welcome && <>
          <h1 className='text-4xl text-orange-500 font-bold'>Welcome to the Survey</h1>
          <p className='text-xl text-gray-400 text-center mt-10'>We here believe that the user knows well about the company and values your each and every genuine feedback</p>
          <button className= ' mt-4 h-16 w-40 bg-blue-600 p-3 rounded-md' onClick={handleWelcome}>Click here to Start</button>
          </>
        }
        {
          check.thankyou && <>
          <h1 className='text-4xl text-orange-500 font-bold'>Thankyou for your Feedback</h1>
          <p className='text-xl text-gray-400 text-center mt-10'>We values your genuine feedback and your time for giving feedback</p>
          {setTimeout(() => {
              
              setCheck({"welcome":true})
            
          }, 5000)}
          </>
        }

      </div>
     
    </>
  )
}

export default App
