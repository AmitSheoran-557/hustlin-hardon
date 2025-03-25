import React from 'react'

const Roadmap = () => {
  return (
    <div>
      <div className='max-w-[1140px] mx-auto'>
        {ROADMAP_LIST.map((item, index) => (
            <div key={index}>
                <p>{item.phase}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Roadmap