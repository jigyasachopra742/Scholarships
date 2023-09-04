import React from 'react'
import './All.css';

const All = (props) => {
  return (
        <div className='scholar-items'>
            <h3>{props.title}</h3>
            <p>{props.des}</p>
            <button><a href={props.url}>ReadMore</a></button>
        </div>
    )
}

export default All;