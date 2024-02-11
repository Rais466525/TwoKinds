import React from "react"
import cover from '/public/Cover.webp'



const Cover = () => {
  const coverImgStyle = {
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  }

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex justify-center items-center page-shadow">
      </div>
    </div>
  )
}

export default Cover