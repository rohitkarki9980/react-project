import { useContext } from "react"
import { GlobalContext } from "../components/CreateContext"

const UseContext = () => {
    let data = useContext(GlobalContext)
  return (
    <>
    <div className="p-5 border-3 rounded-md">
        <h1>
        Name:{data.name}<br/>
        </h1>
  
        Class:{data.address}<br/>
        Age:{data.age}<br/>


    </div>
       
    </>
  )
}

export default UseContext