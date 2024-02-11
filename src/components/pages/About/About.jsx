import React from 'react'
// import paw from '/paw.png'
import Styles from './About.module.css'

const About = () => {
  return (
    <>
      <div className={Styles.about}>

        {/* <img src={paw} alt="Лапа для About" className={Styles.img} /> */}

        <div className={Styles.header}>
          <h1 className='text-2xl text-amber-500'>Two</h1>
          <h1 className='text-2xl text-teal-500'>Kinds</h1>
        </div>


        <div className={Styles.text}>
          <p>
            Twokinds is a webcomic that takes place in a world conflicted with racial tension, primarily between the human-like Humans and the animal-like Keidran. They have dramatically different societies and ideas on how to live and act. It is because of these differences that the two races are almost always in some form of conflict. The story begins as the world hinges on the brink of another war. However, unlike before, this time war seems to be the result of a single man, manipulating the two races for his own personal gain - though he no longer has any memory of doing so.
          </p>
        </div>

      </div>
    </>
  )
}

export default About