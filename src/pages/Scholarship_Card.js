import React from 'react'
import "./Scholarship_Card.css";

const Scholarship_Card = ({title, category}) => {
  return (
        <div className='cardd'>
            <h2>{title}</h2>
            <h2>{category}</h2>
        </div>
    
  )
}

export default Scholarship_Card;