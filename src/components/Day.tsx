import { useEffect, useState } from "react"
import { Notifications } from "../sampleData"

interface DayProps{
    day: Notifications
    index: number
}
interface Position{
    x: number,
    y: number
}
const imageLinks : { [key: string]: string } = {
  "snapchat": "https://imgs.search.brave.com/lxDhj9E5cbjd2z3OFJCDtwJoJNXduC2txexBze_6MuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MzYu/cG5n",
  "instagram": "https://imgs.search.brave.com/MMmOkchhxhGPcIDTpif9ud7kCm6t4Q5aUscYatv8jC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzM3LzM1LzU5/LzM2MF9GXzgzNzM1/NTk1OF9Qdno2bHhC/VjZrdDJUNkYzWkRz/N1M3bWhaN2p1OFhQ/NC5qcGc",
  "discord": "https://imgs.search.brave.com/pmuptIuc0mSUaUjVLXCo4wGMnYjaQJROYGZvJ7FakUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzExL2Rpc2NvcmQt/bG9nby0wLnBuZw",
  "messages": "https://imgs.search.brave.com/0iMXcKSYeyAJFMe0SznQzU0z7mUUrXHZs1Lzi6sGyKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXBwbGUtYXBw/cy8xMDAvQXBwbGVf/TWVzc2FnZXMtNTEy/LnBuZw"
}
export const Day : React.FC<DayProps> = ({
    day,
    index
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
            {index + 1}
            {isVisible && (
        <div
          className="popup"
          style={{
            top: mousePosition.y + 10, // 10px below the cursor
            left: mousePosition.x + 10, // 10px to the right of the cursor
          }}
        >
          <h1>Notifications on December {index + 1}</h1>
          <div className="popupBody">
             <div>
                <p>Snapchat: {day.snapchat}</p>
                <p>Instagram: {day.instagram}</p>
                <p>Messages: {day.messages}</p>
                <p>Discord: {day.discord}</p>
              </div>
              <div className="center">
                <p>Most notifications was on {day.most} !</p>
                <img src = {`${imageLinks[day.most]}`}></img>
              </div>
              
            </div>
          
        </div>
      )}
        </div>
    )
    
}