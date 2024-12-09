import { useEffect, useState } from "react"
import { decemberData } from "../sampleData"
import { Day } from "./Day"
const DataVisualizer = () => {
  return (
    <div
      className="days"
    >
      {
        decemberData.map((day) => {
          return <Day day = {day}/>
        })
      }
    </div>
  )
}

export default DataVisualizer
