import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const ReduxCounter = () => {
    let {count} = useSelector(store=> store)
    let dispatch =useDispatch()

  return (
    <div className='flex h-[100vh] justify-center items-center flex-col gap-4'>
       
        <h1 className='text-xl border rounded-md p-2 bg-black text-white'>
        Counter:{count}
        </h1>
        <div  className='flex gap-2'>
        <button onClick={()=>{
          dispatch({type:"Increase"})
        }} className='border rounded-md bg-blue-300 p-3'>Increase Count</button>
        <button onClick={()=>{
          dispatch({type:"Decrease"})
        }} className='border rounded-md bg-blue-300 p-3'>Decrease Count</button>
        <button onClick={()=>{
          dispatch({type:"Reset"})
        }} className='border rounded-md bg-blue-300 p-3'>Reset Count</button>
        </div>
       
    </div>
  )
}

export default ReduxCounter