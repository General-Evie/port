import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'

function Container() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);

  };

  const getClassName = (index) => {
    if (index === activeTab) return "tab-content active";
    return index < activeTab ? "tab-content to-left" : "tab-content to-right";
  };

  const getTabClassName = (index) => {
    return index === activeTab ? "active" : "";
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li onClick={() => handleTabClick(0)} className={getTabClassName(0)}>
            About
          </li>
          <li onClick={() => handleTabClick(1)} className={getTabClassName(1)}>
            Projects
          </li>
          <li onClick={() => handleTabClick(2)} className={getTabClassName(2)}>
            Contact
          </li>
        </ul>
      </nav>
      <div className='content-container'>
        <div className={getClassName(0)}>
          <About />
        </div>
        <div className={getClassName(1)}>
          <Project />
        </div>
        <div className={getClassName(2)}>
          <Contact />
        </div>
      </div>

      {/* {activeTab === 'about' && <About />}
      {activeTab === 'project' && <Project />}
      {activeTab === 'contact' && <Contact />} */}
    </div>
  )
}

export default Container