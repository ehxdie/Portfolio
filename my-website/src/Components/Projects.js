import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Projects(props) {
  const [infocontrol, setinfocontrol] = useState(true);

  const handleclick = () => setinfocontrol(!infocontrol);

  const propsDescription = <p>Project description <KeyboardArrowDownOutlinedIcon/></p>;
  console.log(infocontrol);

  return (
    <>
    <div className='projects-container'>
        
         <div className='projects-container-text'>
              <p className='projects-container-text1'>Title: {props.name}</p>
              <div className='projects-container-text2-header' onClick={handleclick}>
                 <div className='text2-header'> Project description {infocontrol ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}</div>
                 {infocontrol ? null : <p className='projects-container-text2'>{props.description}</p>}
              </div>
          <div className='projects-container-text3-header' onClick={handleclick}P>
                <div className='text2-header'> Tech Stack {infocontrol ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}</div>
                {infocontrol ? null : <p className='projects-container-text3'>{props.stack}</p>}
            </div> 

            <a className='projects-container-link'href={props.link} target='_blank' rel='noopener noreferrer'>{props.link}</a>
        
        </div>

        <div className='projects-container-image'>
            <img src={props.img} className='img'/>
        </div>
    </div>
    </>
  )
}

export default Projects