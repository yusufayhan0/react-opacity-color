import { useEffect, useRef, useState } from "react";
import ColorSquare from "./ColorSquare";


function App() {

  const [getColor, setgetColor] = useState("")
  const ref = useRef()
  const notificationRef = useRef()
  const clickColor = (color) => {
    ref.current.parentNode.parentNode.style.backgroundColor = color
    notificationRef.current.style.top = "30px"
    setTimeout(() => {
      notificationRef.current.style.top = "-70px"
    }, 2500);
  }

  const notificationShow = (color) => {
    setgetColor(color)
  }

  const [state, setstate] = useState([])

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count++
      setstate(a => [...a, <ColorSquare key={count} notificationShow={notificationShow} clickColor={clickColor} />])
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (
    <div ref={ref}>
    <div ref={notificationRef} className="notification">Seçtiğiniz &nbsp; <div style={{ color: getColor }}>{getColor}</div> &nbsp; kodlu renk kopyalandı</div>
      <div  className="app-container">
        
        {
          state.map(a => a)
        }
        <div style={{clear:"both"}}></div>
      </div>
    </div>
  );
}

export default App;
