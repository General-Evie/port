import React from 'react'
import profilePic from './images/profilePic.jpg';

function About() {
  return (
    <div className='about'>
        <img className='profilePic' src={profilePic}></img>
        {/* <h1>Hi I'm Evie</h1> */}
        <p className='bio'>Results-oriented web developer in front-end development. Proficient in HTML, CSS, JavaScript, with a focus on creating responsive and user-friendly interfaces. Experienced in working with React and TypeScript to build dynamic web applications. Strong communication and problem-solving skills, with a passion for learning new technologies. Seeking to leverage expertise to contribute to a dynamic development team.</p>
    </div> 
  )
}

export default About