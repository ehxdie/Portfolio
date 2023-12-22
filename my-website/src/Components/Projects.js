import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';


function Projects(props) {
  const [infocontrol, setinfocontrol] = useState(true);
  const [infocontrol1, setinfocontrol1] = useState(true);

  // Not the best way to handle the dropdown state change tbh
  const handleclick = () => setinfocontrol(!infocontrol);
  const handleclick1 = () => setinfocontrol1(!infocontrol1);


  console.log(infocontrol);
  

  return (
    <>
    <div className='projects-container'>
        
         <div className='projects-container-text'>
              <p className='projects-container-text1'>Title: {props.name}</p>
              <div className='projects-container-text2-header' onClick={handleclick}>
                 <div className='text2-header'> Project description {infocontrol ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
                </div>
                {infocontrol ? null : <div className='projects-container-text2'>{props.description}</div>}  

              </div>
          <div className='projects-container-text3-header' onClick={handleclick1}P>
                <div className='text2-header'> Tech Stack {infocontrol1 ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
                </div>
                {infocontrol1 ? null : <div className='projects-container-text3'>{props.stack}</div>}
            </div> 

            <a className='projects-container-link'href={props.link} target='_blank' rel='noopener noreferrer'>Visit Site</a>
        
        </div>

        <div className='projects-container-image'>
            <img src={props.img} className='img'/>
        </div>
    </div>
    </>
  )
}

export default Projects