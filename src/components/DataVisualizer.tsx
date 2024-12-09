import { decemberData } from "../sampleData"
import { Day } from "./Day"
const DataVisualizer = () => {
  return (
    <div
      className="days"
    >
      {
        decemberData.map((day, index) => {
          return <Day key = {index} day = {day} index = {index}/>
        })
      }
    </div>
  )
}

export default DataVisualizer
