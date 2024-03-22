import React from 'react'
import {useSelector} from "react-redux"

const ReduxCounter = () => {
    let countStore = useSelector(store=> store)
    let count= countStore.count
  return (
    <div>
        Count:{count}
    </div>
  )
}

export default ReduxCounter