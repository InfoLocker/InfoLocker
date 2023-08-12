import React from 'react'
import './backgroundWrapper.css';

export default function BackgroundWrapper(props) {

  const bg=props.variantt==="blue"?"bg-blue":"bg-red";

  return (
    <div  className={`container ${bg}`} >
  {props.children}
   </div>
  )
}

