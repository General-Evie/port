import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'

function Container() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => handleTabClick('about')}
            className={activeTab === 'about' ? 'active' : ''}
          >
            About
          </li>
          <li
            onClick={() => handleTabClick('project')}
            className={activeTab === 'project' ? 'active' : ''}
          >
            Projects
          </li>
          <li
            onClick={() => handleTabClick('contact')}
            className={activeTab === 'contact' ? 'active' : ''}
          >
            Contact
          </li>
        </ul>
      </nav>
      {activeTab === 'about' && <About />}
      {activeTab === 'project' && <Project />}
      {activeTab === 'contact' && <Contact />}
      <div className='overlay'></div>
    </div>
  )
}

export default Container