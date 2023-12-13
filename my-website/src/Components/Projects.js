import React from 'react'

function Projects(props) {
  return (
    <div className='projects-container'>
        <div className='projects-container-text'>
              <p className='projects-container-text1'>{props.number} {props.name}</p>
              <p className='projects-container-text2'>{props.description}</p>
              <p className='projects-container-text3'>{props.stack}</p>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.link}</a>
        </div>
        <div className='projects-container-image'>
            <img src={props.img} className='img'/>
        </div>
    </div>
  )
}

export default Projects