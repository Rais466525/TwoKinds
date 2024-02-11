import React from "react";
import MyBook from "./components/MyBook";
import BG from '/BG.jpg'
// import pen from '/pen.png'
import './App.css'

const BgTextureStyle = {
  backgroundImage: `url(${BG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
}

const App = () => {
  return (
    <div style={BgTextureStyle}
    className="w-full h-full flex justify-center items-center flex-col overflow-hidden">
      {/* <div>
        <img src={pen} alt="pen" style={{width: '400px', gap: '25px'}} />
      </div> */}
      <MyBook />
    </div>
  )
}

export default App