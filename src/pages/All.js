import React from 'react'
import './All.css';

const All = (props) => {
  return (
        <div className='scholar-items'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.btn}</button>
        </div>
    )
}

export default All;