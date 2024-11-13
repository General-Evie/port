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
               Recreation of a Food Diary app by{' '}
              <a
                className='ibuild'
                href='https://play.google.com/store/apps/details?id=com.ibuild.fooddiary&hl=en_US&pli=1'
                target='blank'
                onClick={handleAnchorClick}>
                iBuild Labs
              </a>{' '}
              using React and TypeScript.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project