import React from 'react'
import ProfilePic from './images/IMG_0786(1).png'

function About() {
  return (
    <div className='about'>
        <img className='profilePic' src={ProfilePic} alt='' />
        <h1>Hi I'm Bret</h1>
        <p className='bio'>I'm a web developer who loves working on front-end projects. I'm skilled in HTML, CSS, and JavaScript, and I focus on building responsive and user-friendly interfaces. I have experience with React and TypeScript, which I use to create dynamic web applications. I'm a strong communicator and problem-solver, always eager to learn new technologies. I'm excited to bring my expertise to a dynamic development team and contribute to their success.</p>
    </div> 
  )
}

export default About