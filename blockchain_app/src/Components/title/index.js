import React from 'react';
import "./title.css"

export function Title(props){
  return(
      <div className="title" style={{display:"flex"}}>
          <div className='icon-xl'>
              <props.icon id="icon" size={30}/>
          </div>
          <div style={{marginLeft: "20px"}}>
              <h1>{props.title}</h1>
          </div>
          <div className='break'></div>
          <hr className="rounded"></hr>
      </div>
  )
}
