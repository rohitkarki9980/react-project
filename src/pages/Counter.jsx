import { useEffect, useRef, useState } from "react"


const Counter = () => {
    let [count, setCounter] =useState(0)
    let [data, setData]= useState(100)
    let count2= useRef()
     let increamentHandle = ()=>{
        setCounter(++count)
        count2.current.value=count
     }
     let decreamentHandle = ()=>{
        setCounter(--count)
        count2.current.value=count
     }
     let resetCounter = ()=>{
        let count = 0
        setCounter(count)

        count2.current.value=count
     }
    useEffect(()=>{
        
    },[count,data])
  return (
    <div className="flex justify-center items-center  text-3xl  flex-col h-[100vh] ">
      <input type="text" ref={count2}/>
       <div className="flex flex-col  text-center border-3 border-black  p-10">
             Count:{count}
           <div className="flex ">
           <button className="bg-blue-500 p-2 rounded-xl m-2" 
           onClick={increamentHandle}
           >Increase</button>
           <button className="bg-blue-500 p-2 rounded-xl m-2" onClick={()=>{
            setCounter(decreamentHandle)
        }}>Decrease</button>
         <button className="bg-blue-500 p-2 rounded-xl m-2" onClick={resetCounter
        }>Reset</button>
           </div> 
           </div>

           <div className="flex flex-col  text-center border-3 border-black  p-10">
             Data:{data}
           <div className="flex ">
           <button className="bg-blue-500 p-2 rounded-xl m-2" 
           onClick={()=>{
            setData(data+100)
        }}
           >Increase</button>
           <button className="bg-blue-500 p-2 rounded-xl m-2" onClick={()=>{
            setData(data + 100)
        }}>Decrease</button>
           </div> 
           </div>
           
       
        
       
        </div>
        
    
    
  )
}

export default Counter