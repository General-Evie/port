import React from 'react'

function Project() {
  return (
    <div className='projects'>
        <div className="project-1" onClick={() => window.open('https://fooddiaryapp.netlify.app', '_blank')}>
          <div className='thumbnail'>
            <a href='https://fooddiaryapp.netlify.app' target='blank'>
              <div className='card-description'>
                <a href='https://fooddiaryapp.netlify.app' target='blank'>
                  <h1>Food Diary App</h1>
                  <div>Recreation of a food Diary app, to keep track of daily food intake</div>
                </a>
              </div>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Project