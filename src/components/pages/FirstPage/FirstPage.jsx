import React from 'react'
// import devLogo from '/devLogo.jpg'
import aboutPrew from '/public/personages/about_prew.png'

const FirstPage = () => {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-tr from-violet-700 to-violet-950 overflow-hidden" >
        <div className="devLogo">
          {/* <img src={devLogo} alt="devLogo" className='size-40 rounded-full mx-5 my-5 border border-solid border-20 border-black' /> */}
          <img src={aboutPrew} alt="aboutPrew" />
        </div>
      </div>
    </>
  )
}
export default FirstPage