import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
    const theme = useSelector((state) => state);
  return (
      <div className='Footer-container'>
          <div className= {theme ? "Footer-container-1": "Footer-container-1-dark"}>
              Edidiong Ephraim 2023
          </div>
          <div className='Footer-container-2'>
              <div>
                  <a href='https://www.linkedin.com/in/edidiong-ephraim/' className={theme ? 'links-style' : "links-style-dark"}>Linkeldn</a>
              </div>
              <div>
                  <a href='https://www.linkedin.com/in/edidiong-ephraim/' className={theme ? 'links-style' : "links-style-dark"}>Email</a>
              </div>
              <div>
                  <a href='https://github.com/ehxdie' className={theme ? ' links-style' : "links-style-dark"}>Github</a>
              </div>
          </div>
      </div>
  )
}

export default Footer