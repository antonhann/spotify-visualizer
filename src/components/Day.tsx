import { useEffect, useState } from "react"
import { Notifications } from "../sampleData"

interface DayProps{
    day: Notifications
}
interface Position{
    x: number,
    y: number
  }
export const Day : React.FC<DayProps> = ({
    day
}) => {
    const [mousePosition, setMousePosition] = useState<Position>({x: 0, y: 0})
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        console.log(mousePosition)
    }, [mousePosition])
    const handleMouseMove = (event: React.MouseEvent) => {

        setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const handleMouseEnter = () => {
        setIsVisible(true);
      };
    
    const handleMouseLeave = () => {
        setIsVisible(false);
    };
    const getBackgroundColor = (total: number) => {
        // Map `total` (0-100) to a darker green (from #00FF00 to #006400)
        const green = Math.floor(255 - (total * 1.0005)); // Darken the green as total increases
        return `rgb(0, ${255 - green}, 0)`; // RGB format for green
      };
    return(
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="day"
            style={{
                backgroundColor: getBackgroundColor(day.total)
            }}
        >
            {day.total}
            {isVisible && (
        <div
          className="popup"
          style={{
            top: mousePosition.y + 10, // 10px below the cursor
            left: mousePosition.x + 10, // 10px to the right of the cursor
          }}
        >
          {getBackgroundColor(day.total)}
        </div>
      )}
        </div>
    )
    
}