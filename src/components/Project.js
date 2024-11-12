import React from 'react'



function Project() {
  const handleCardClick = () => {
    window.open('https://fooddiaryapp.netlify.app', '_blank');
  };

  const handleAnchorClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='projects'>
      <div className="project-1" onClick={handleCardClick}>
        <div className='thumbnail'>
          <div className='card-description'>
            <h1>Food Diary App</h1>
            <div className='p1-description'>
              This Food Diary app, recreated from an
              <a
                className='ibuild'
                href='https://play.google.com/store/apps/details?id=com.ibuild.fooddiary&hl=en_US&pli=1'
                target='blank'
                onClick={handleAnchorClick}>
                iBuild Labs
              </a>
              application using React and TypeScript, lets you track your daily meals. You can add, update, or delete entries with details like description, time, and date. It's an easy way to stay on top of your eating habits and make healthier choices.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project